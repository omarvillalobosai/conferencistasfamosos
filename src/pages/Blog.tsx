import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Search, PlayCircle, User } from 'lucide-react';
import { blogPosts, getYoutubeThumbnail, formatBlogDate } from '@/data/blogPosts';

const Blog = () => {
  const [query, setQuery] = useState('');
  const [speaker, setSpeaker] = useState<string>('Todos');

  const speakerOptions = useMemo(() => {
    const set = new Set(blogPosts.map((p) => p.speakerName));
    return ['Todos', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const matchesSpeaker = speaker === 'Todos' || p.speakerName === speaker;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.speakerName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesSpeaker && matchesQuery;
    });
  }, [query, speaker]);

  return (
    <>
      <Helmet>
        <title>Blog de Videos | Conferencistas Famosos</title>
        <meta
          name="description"
          content="Videos de los mejores conferencistas de Latinoamérica: liderazgo, motivación, ventas y desarrollo humano en un solo lugar."
        />
        <link rel="canonical" href="https://conferencistasfamosos.com/blog" />
        <meta property="og:title" content="Blog de Videos | Conferencistas Famosos" />
        <meta
          property="og:description"
          content="Videos de los mejores conferencistas de Latinoamérica: liderazgo, motivación, ventas y desarrollo humano."
        />
        <meta property="og:url" content="https://conferencistasfamosos.com/blog" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog de Videos</h1>
              <p className="text-lg text-gray-700 mb-8">
                Aprende directamente de los conferencistas más influyentes de Latam: videos
                seleccionados de sus canales oficiales.
              </p>
              <div className="relative max-w-lg mx-auto">
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por speaker, tema o título..."
                  aria-label="Buscar posts del blog por speaker, tema o título"
                  className="pl-10 pr-4 py-2 rounded-full border-gray-300"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 h-5 w-5" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {speakerOptions.map((name) => (
                <Button
                  key={name}
                  variant={speaker === name ? 'default' : 'outline'}
                  className={speaker === name ? 'bg-orange-500 hover:bg-orange-600' : ''}
                  onClick={() => setSpeaker(name)}
                >
                  {name}
                </Button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p className="text-center text-gray-600 py-20">
                No encontramos videos con esa búsqueda.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={getYoutubeThumbnail(post.youtubeId)}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
                        </div>
                      </div>

                      <CardContent className="pt-6 flex-grow flex flex-col">
                        <div className="flex items-center text-sm text-gray-600 mb-3 gap-4">
                          <span className="inline-flex items-center">
                            <User className="h-4 w-4 mr-1" /> {post.speakerName}
                          </span>
                          <span className="inline-flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatBlogDate(post.publishedAt)}
                          </span>
                        </div>

                        <span className="inline-block self-start bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
                          {post.category}
                        </span>

                        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-orange-500 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-700 text-sm line-clamp-3">{post.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
