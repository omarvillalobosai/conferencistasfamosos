import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const FUNCTIONS_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1`;
const TOKEN_KEY = "cf_newsletter_admin_token";

interface Subscriber {
  id: string;
  name: string;
  email: string;
  status: string;
  last_sent_at: string | null;
  last_speaker_slug: string | null;
  send_count: number;
  created_at: string;
}

interface LogRow {
  id: string;
  subscriber_id: string;
  post_slug: string;
  speaker_slug: string;
  status?: string;
  error?: string | null;
  created_at: string;
}

interface OverviewData {
  stats: {
    total: number;
    active: number;
    unsubscribed: number;
    recentSends: number;
    failedSends: number;
  };
  subscribers: Subscriber[];
  recentLog: LogRow[];
  failedLog: LogRow[];
}

type Tab = "subscribers" | "recent" | "failed";

export default function NewsletterAdmin() {
  const [token, setToken] = useState<string>(() => localStorage.getItem(TOKEN_KEY) ?? "");
  const [input, setInput] = useState("");
  const [data, setData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("subscribers");
  const [query, setQuery] = useState("");

  const fetchData = async (t: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${FUNCTIONS_URL}/newsletter-admin?action=overview`, {
        headers: { "x-admin-token": t },
      });
      if (res.status === 401) {
        setError("Token inválido");
        localStorage.removeItem(TOKEN_KEY);
        setToken("");
        setData(null);
        return;
      }
      if (!res.ok) throw new Error(await res.text());
      setData(await res.json());
    } catch (e: any) {
      setError(e?.message ?? String(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchData(token);
  }, [token]);

  const submitToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    localStorage.setItem(TOKEN_KEY, input.trim());
    setToken(input.trim());
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
    setData(null);
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <Helmet><title>Admin · Newsletter</title><meta name="robots" content="noindex" /></Helmet>
        <form onSubmit={submitToken} className="w-full max-w-md bg-neutral-900 border border-white/10 p-8">
          <h1 className="text-xs tracking-[0.3em] text-orange-500 uppercase mb-6">Admin · Newsletter</h1>
          <label className="block text-sm text-white/70 mb-2">Token de acceso</label>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-black border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
            placeholder="NEWSLETTER_ADMIN_TOKEN"
            autoFocus
          />
          <button type="submit" className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white text-xs tracking-[0.2em] uppercase font-bold py-3 transition">
            Entrar
          </button>
          {error && <p className="text-red-400 text-xs mt-4">{error}</p>}
        </form>
      </div>
    );
  }

  const filtered = (data?.subscribers ?? []).filter((s) =>
    query ? (s.email + s.name).toLowerCase().includes(query.toLowerCase()) : true,
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet><title>Admin · Newsletter</title><meta name="robots" content="noindex" /></Helmet>

      <header className="border-b border-white/10 px-6 md:px-12 py-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] tracking-[0.4em] text-orange-500 uppercase">Admin</p>
          <h1 className="text-2xl font-light mt-1">Frases que Inspiran</h1>
        </div>
        <div className="flex gap-3">
          <button onClick={() => fetchData(token)} className="text-xs tracking-[0.2em] uppercase border border-white/20 hover:border-white/60 px-4 py-2 transition">
            Recargar
          </button>
          <button onClick={logout} className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white px-4 py-2 transition">
            Salir
          </button>
        </div>
      </header>

      {loading && <p className="p-12 text-white/60 text-sm">Cargando…</p>}
      {error && <p className="p-12 text-red-400 text-sm">{error}</p>}

      {data && (
        <>
          <section className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 border-b border-white/10">
            {[
              { label: "Total", value: data.stats.total },
              { label: "Activos", value: data.stats.active },
              { label: "Bajas", value: data.stats.unsubscribed },
              { label: "Envíos recientes", value: data.stats.recentSends },
              { label: "Fallidos", value: data.stats.failedSends, danger: true },
            ].map((s) => (
              <div key={s.label} className="bg-black px-6 py-8">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/50">{s.label}</p>
                <p className={`text-3xl font-light mt-2 ${s.danger && s.value > 0 ? "text-red-400" : "text-white"}`}>{s.value}</p>
              </div>
            ))}
          </section>

          <nav className="flex border-b border-white/10 px-6 md:px-12">
            {([
              ["subscribers", `Suscriptores (${data.subscribers.length})`],
              ["recent", `Historial reciente (${data.recentLog.length})`],
              ["failed", `Errores (${data.failedLog.length})`],
            ] as [Tab, string][]).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`text-xs tracking-[0.2em] uppercase py-5 px-6 border-b-2 transition ${
                  tab === id ? "border-orange-500 text-white" : "border-transparent text-white/50 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="px-6 md:px-12 py-8">
            {tab === "subscribers" && (
              <>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por email o nombre…"
                  className="w-full max-w-md bg-neutral-900 border border-white/10 px-4 py-2 text-sm text-white mb-6 focus:outline-none focus:border-orange-500"
                  aria-label="Buscar suscriptores"
                />
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-[10px] tracking-[0.2em] uppercase text-white/50 border-b border-white/10">
                      <tr>
                        <th className="text-left py-3 pr-4">Email</th>
                        <th className="text-left py-3 pr-4">Nombre</th>
                        <th className="text-left py-3 pr-4">Estado</th>
                        <th className="text-left py-3 pr-4">Últ. envío</th>
                        <th className="text-left py-3 pr-4">Últ. speaker</th>
                        <th className="text-right py-3 pr-4"># envíos</th>
                        <th className="text-left py-3">Alta</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((s) => (
                        <tr key={s.id} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 pr-4">{s.email}</td>
                          <td className="py-3 pr-4 text-white/70">{s.name}</td>
                          <td className="py-3 pr-4">
                            <span className={`text-[10px] tracking-[0.2em] uppercase px-2 py-1 ${s.status === "active" ? "bg-green-500/10 text-green-400" : "bg-white/10 text-white/50"}`}>
                              {s.status}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-white/60">{s.last_sent_at ? new Date(s.last_sent_at).toLocaleString() : "—"}</td>
                          <td className="py-3 pr-4 text-white/60">{s.last_speaker_slug ?? "—"}</td>
                          <td className="py-3 pr-4 text-right">{s.send_count}</td>
                          <td className="py-3 text-white/60">{new Date(s.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {tab === "recent" && <LogTable rows={data.recentLog} />}
            {tab === "failed" && (
              data.failedLog.length === 0
                ? <p className="text-white/60 text-sm">Sin errores recientes ✓</p>
                : <LogTable rows={data.failedLog} showError />
            )}
          </div>
        </>
      )}
    </div>
  );
}

function LogTable({ rows, showError = false }: { rows: LogRow[]; showError?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-[10px] tracking-[0.2em] uppercase text-white/50 border-b border-white/10">
          <tr>
            <th className="text-left py-3 pr-4">Fecha</th>
            <th className="text-left py-3 pr-4">Speaker</th>
            <th className="text-left py-3 pr-4">Post</th>
            {!showError && <th className="text-left py-3 pr-4">Estado</th>}
            <th className="text-left py-3 pr-4">Suscriptor</th>
            {showError && <th className="text-left py-3">Error</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-b border-white/5 hover:bg-white/5 align-top">
              <td className="py-3 pr-4 text-white/60 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
              <td className="py-3 pr-4">{r.speaker_slug}</td>
              <td className="py-3 pr-4 text-white/70">{r.post_slug}</td>
              {!showError && (
                <td className="py-3 pr-4">
                  <span className={`text-[10px] tracking-[0.2em] uppercase px-2 py-1 ${r.status === "sent" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                    {r.status}
                  </span>
                </td>
              )}
              <td className="py-3 pr-4 text-white/50 font-mono text-xs">{r.subscriber_id.slice(0, 8)}…</td>
              {showError && <td className="py-3 text-red-300 text-xs">{r.error ?? "—"}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
