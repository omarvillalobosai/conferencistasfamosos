#!/usr/bin/env python3
"""Enrich blog posts with AI-generated summary, key points, quotes, and exercises.

Reads video IDs from src/data/blogPosts.ts, fetches the YouTube transcript,
sends it to Lovable AI Gateway, and writes results to
src/data/blogPostsEnrichment.ts.

Usage:
    python3 scripts/enrich_blog_posts.py
    python3 scripts/enrich_blog_posts.py --only=slug-here
    python3 scripts/enrich_blog_posts.py --force
"""
import json
import os
import re
import sys
import time
from pathlib import Path

import requests
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import (
    TranscriptsDisabled,
    NoTranscriptFound,
    VideoUnavailable,
)

ROOT = Path(__file__).resolve().parent.parent
BLOG_TS = ROOT / "src/data/blogPosts.ts"
ENRICH_TS = ROOT / "src/data/blogPostsEnrichment.ts"

API_KEY = os.environ["LOVABLE_API_KEY"]
MODEL = "google/gemini-3-flash-preview"
GATEWAY_URL = "https://ai.gateway.lovable.dev/v1/chat/completions"

LANGS = ["es", "es-419", "es-MX", "es-ES", "en"]


def parse_posts():
    src = BLOG_TS.read_text(encoding="utf-8")
    # Match { ... } objects inside the blogPosts array
    entries = re.findall(
        r"\{\s*slug:\s*'([^']+)',\s*speakerId:\s*'([^']+)',\s*speakerName:\s*'([^']+)',\s*title:\s*'([^']+)',\s*description:\s*'([^']*)',\s*youtubeId:\s*'([^']+)'",
        src,
    )
    posts = []
    for slug, speaker_id, speaker_name, title, description, yt in entries:
        posts.append(
            dict(
                slug=slug,
                speakerId=speaker_id,
                speakerName=speaker_name,
                title=title,
                description=description,
                youtubeId=yt,
            )
        )
    return posts


def parse_existing_enrichments():
    """Return dict[slug] -> raw JSON block from existing enrichment file."""
    src = ENRICH_TS.read_text(encoding="utf-8")
    m = re.search(
        r"export const blogPostsEnrichment: Record<string, BlogPostEnrichment> = (\{[\s\S]*?\});",
        src,
    )
    if not m:
        return {}
    body = m.group(1).strip()
    if body == "{}":
        return {}
    # Find each top-level key: value pair
    result = {}
    # Match "slug": { ... } up to matching closing brace
    i = 0
    body_inner = body[1:-1]  # strip outer braces
    while i < len(body_inner):
        km = re.match(r"\s*['\"]([^'\"]+)['\"]\s*:\s*", body_inner[i:])
        if not km:
            break
        slug = km.group(1)
        i += km.end()
        # Find matching brace
        assert body_inner[i] == "{"
        depth = 0
        start = i
        while i < len(body_inner):
            c = body_inner[i]
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    i += 1
                    break
            i += 1
        result[slug] = body_inner[start:i]
        # Skip trailing comma/space
        while i < len(body_inner) and body_inner[i] in ",\n\r\t ":
            i += 1
    return result


def fetch_transcript(video_id: str) -> str | None:
    try:
        api = YouTubeTranscriptApi()
        transcript_list = api.list(video_id)
        transcript = None
        for lang in LANGS:
            try:
                transcript = transcript_list.find_transcript([lang])
                break
            except Exception:
                continue
        if transcript is None:
            # Try any auto-generated
            try:
                transcript = transcript_list.find_generated_transcript(LANGS)
            except Exception:
                # Try any available
                for t in transcript_list:
                    transcript = t
                    break
        if transcript is None:
            return None
        entries = transcript.fetch()
        text = " ".join(e.text for e in entries if e.text.strip())
        return re.sub(r"\s+", " ", text).strip()
    except (TranscriptsDisabled, NoTranscriptFound, VideoUnavailable):
        return None
    except Exception as e:
        print(f"    transcript error: {e}", file=sys.stderr)
        return None


SCHEMA = {
    "type": "object",
    "additionalProperties": False,
    "properties": {
        "summary": {"type": "string"},
        "keyPoints": {"type": "array", "items": {"type": "string"}},
        "quotes": {"type": "array", "items": {"type": "string"}},
        "exercises": {
            "type": "array",
            "items": {
                "type": "object",
                "additionalProperties": False,
                "properties": {
                    "title": {"type": "string"},
                    "description": {"type": "string"},
                },
                "required": ["title", "description"],
            },
        },
    },
    "required": ["summary", "keyPoints", "quotes", "exercises"],
}


def call_ai(post: dict, transcript: str | None) -> dict:
    system = (
        "Eres un editor experto de contenido motivacional en español. "
        "Generas un post enriquecido para un blog profesional de conferencistas. "
        "Respondes SIEMPRE en español neutro, en JSON válido según el schema."
    )
    if transcript:
        if len(transcript) > 40000:
            transcript = transcript[:40000]
        user = f"""Video: "{post['title']}"
Conferencista: {post['speakerName']}
Descripción original: {post['description']}

Transcripción del video:
\"\"\"
{transcript}
\"\"\"

Genera contenido fiel a la transcripción:
- summary: resumen ejecutivo de 2 a 3 párrafos (máx 500 palabras).
- keyPoints: 5 a 7 ideas clave, cada una en 1 frase clara.
- quotes: 3 a 5 frases textuales o casi textuales impactantes del conferencista.
- exercises: 3 a 5 ejercicios prácticos accionables, cada uno con título corto y descripción breve (1-2 frases).

No inventes datos que no aparezcan en la transcripción."""
    else:
        user = f"""Video: "{post['title']}"
Conferencista: {post['speakerName']}
Categoría: {post.get('category', '')}
Descripción original: {post['description']}

No se pudo obtener la transcripción del video. Genera contenido inspirador y útil basado en el título, la categoría y la descripción, en el estilo característico del conferencista, sin inventar cifras, fechas ni citas textuales específicas.

- summary: resumen introductorio de 2 párrafos (máx 350 palabras) que contextualice el tema del video.
- keyPoints: 5 ideas clave probables del tema tratado, en frases claras.
- quotes: 3 frases inspiradoras genéricas relacionadas al tema (parafraseadas, no atribuidas como citas textuales del conferencista).
- exercises: 4 ejercicios prácticos y accionables que el lector puede aplicar sobre el tema, cada uno con título corto y descripción breve."""

    body = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        "response_format": {
            "type": "json_schema",
            "json_schema": {"name": "blog_enrichment", "strict": True, "schema": SCHEMA},
        },
    }
    r = requests.post(
        GATEWAY_URL,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
        json=body,
        timeout=180,
    )
    if r.status_code == 429:
        raise RuntimeError("rate_limited")
    if r.status_code == 402:
        raise RuntimeError("credits_exhausted")
    if not r.ok:
        raise RuntimeError(f"gateway {r.status_code}: {r.text[:500]}")
    content = r.json()["choices"][0]["message"]["content"]
    return json.loads(content)


def clamp(data: dict) -> dict:
    kp = [str(x).strip() for x in (data.get("keyPoints") or []) if str(x).strip()][:7]
    qs = [str(x).strip().strip('"').strip('"').strip('"') for x in (data.get("quotes") or []) if str(x).strip()][:5]
    exs = []
    for e in (data.get("exercises") or [])[:5]:
        t = str(e.get("title", "")).strip()
        d = str(e.get("description", "")).strip()
        if t and d:
            exs.append({"title": t, "description": d})
    return {
        "summary": str(data.get("summary", "")).strip(),
        "keyPoints": kp,
        "quotes": qs,
        "exercises": exs,
    }


def ts_literal(s: str) -> str:
    # Escape for TypeScript single-quoted string; use JSON.stringify style via json
    return json.dumps(s, ensure_ascii=False)


def render_block(enrichment: dict, generated_at: str) -> str:
    lines = ["{"]
    lines.append(f"    summary: {ts_literal(enrichment['summary'])},")
    lines.append("    keyPoints: [")
    for k in enrichment["keyPoints"]:
        lines.append(f"      {ts_literal(k)},")
    lines.append("    ],")
    lines.append("    quotes: [")
    for q in enrichment["quotes"]:
        lines.append(f"      {ts_literal(q)},")
    lines.append("    ],")
    lines.append("    exercises: [")
    for e in enrichment["exercises"]:
        lines.append("      {")
        lines.append(f"        title: {ts_literal(e['title'])},")
        lines.append(f"        description: {ts_literal(e['description'])},")
        lines.append("      },")
    lines.append("    ],")
    lines.append(f"    aiGeneratedAt: {ts_literal(generated_at)},")
    lines.append("  }")
    return "\n".join(lines)


def write_output(all_blocks: dict[str, str]):
    header = (
        "// AUTO-GENERATED by scripts/enrich_blog_posts.py — do not edit by hand.\n"
        "// Run: python3 scripts/enrich_blog_posts.py [--force] [--only=slug]\n\n"
        "export interface BlogPostExercise {\n"
        "  title: string;\n"
        "  description: string;\n"
        "}\n\n"
        "export interface BlogPostEnrichment {\n"
        "  summary: string;\n"
        "  keyPoints: string[];\n"
        "  quotes: string[];\n"
        "  exercises: BlogPostExercise[];\n"
        "  aiGeneratedAt: string;\n"
        "}\n\n"
        "export const blogPostsEnrichment: Record<string, BlogPostEnrichment> = {\n"
    )
    body = ""
    for slug, block in all_blocks.items():
        body += f"  {json.dumps(slug)}: {block},\n"
    footer = (
        "};\n\n"
        "export const getPostEnrichment = (slug: string): BlogPostEnrichment | undefined =>\n"
        "  blogPostsEnrichment[slug];\n"
    )
    ENRICH_TS.write_text(header + body + footer, encoding="utf-8")


def main():
    args = sys.argv[1:]
    force = "--force" in args
    only = None
    for a in args:
        if a.startswith("--only="):
            only = a.split("=", 1)[1]

    posts = parse_posts()
    if only:
        posts = [p for p in posts if p["slug"] == only]
    existing = parse_existing_enrichments()
    print(f"posts to consider: {len(posts)}; existing enrichments: {len(existing)}")

    output_blocks = dict(existing)  # keep as raw TS blocks
    done = 0
    skipped = 0
    failed = []

    for i, post in enumerate(posts, 1):
        slug = post["slug"]
        if slug in existing and not force:
            print(f"[{i}/{len(posts)}] {slug}: already enriched, skip")
            continue
        print(f"[{i}/{len(posts)}] {slug}: fetching transcript…")
        transcript = fetch_transcript(post["youtubeId"])
        if not transcript or len(transcript) < 200:
            print(f"    no transcript, falling back to metadata-only generation")
            transcript = None
        else:
            print(f"    transcript ok ({len(transcript)} chars)")
        print(f"    calling AI…")
        try:
            raw = call_ai(post, transcript)
            enrich = clamp(raw)
            if not enrich["summary"] or not enrich["keyPoints"]:
                print("    empty result, skip")
                skipped += 1
                continue
            generated_at = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
            output_blocks[slug] = render_block(enrich, generated_at)
            done += 1
            # Write incrementally so a crash doesn't lose progress
            write_output(output_blocks)
            print(f"    ✓ enriched")
        except Exception as e:
            print(f"    ✗ failed: {e}")
            failed.append((slug, str(e)))
            if "credits_exhausted" in str(e):
                print("credits exhausted, stopping")
                break
        time.sleep(1.2)

    write_output(output_blocks)
    print(f"\nDone. enriched={done}, skipped={skipped}, failed={len(failed)}")
    if failed:
        for s, e in failed:
            print(f"  {s}: {e}")


if __name__ == "__main__":
    main()
