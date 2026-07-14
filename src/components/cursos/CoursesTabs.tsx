import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Mic, Rocket, Search, PlayCircle, User, Calendar } from 'lucide-react';
import {
  coursePosts,
  getYoutubeThumbnail,
  formatCourseDate,
  type CourseCategory,
  type CoursePost,
} from '@/data/coursePosts';

interface TabConfig {
  value: CourseCategory;
  label: string;
  icon: React.ReactNode;
  chapter: string;
  title: string;
  description: string;
  emptyMessage: string;
}

const tabs: TabConfig[] = [
  {
    value: 'cliente',
    label: 'Soy Cliente',
    icon: <Mic className="h-4 w-4" />,
    chapter: 'Capítulo 01',
    title: '¿Vas a contratar a un conferencista?',
    description:
      'Videos y guías para elegir al speaker correcto, evitar errores comunes y organizar eventos memorables.',
    emptyMessage: 'Muy pronto publicaremos videos exclusivos para clientes.',
  },
  {
    value: 'conferencista',
    label: 'Quiero ser conferencista',
    icon: <Rocket className="h-4 w-4" />,
    chapter: 'Capítulo 02',
    title: '¿Quieres ser un conferencista famoso?',
    description:
      'Aprende de los mejores. Estrategia sobre marca personal, escenario, storytelling y posicionamiento profesional.',
    emptyMessage: 'Muy pronto publicaremos más videos en esta categoría.',
  },
];

const CourseGrid: React.FC<{ posts: CoursePost[] }> = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
    {posts.map((post, idx) => (
      <Link
        key={post.slug}
        to={`/cursos/${post.slug}`}
        className="group bg-[#0a0a0a] p-6 hover:bg-[#141414] transition-colors flex flex-col"
      >
        <div className="flex items-center justify-between mb-4 text-xs uppercase tracking-widest text-white/40">
          <span>N° {String(idx + 1).padStart(2, '0')}</span>
          <span className="text-orange-500">{post.topic}</span>
        </div>
        <div className="relative aspect-video overflow-hidden mb-5 bg-black">
          <img
            src={getYoutubeThumbnail(post.youtubeId)}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayCircle className="h-14 w-14 text-orange-500 drop-shadow-2xl" strokeWidth={1.2} />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-white/60 line-clamp-2 mb-5 flex-grow leading-relaxed">
          {post.description}
        </p>
        <div className="flex items-center justify-between text-xs text-white/40 pt-4 border-t border-white/10">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" /> {post.speakerName}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatCourseDate(post.publishedAt)}
          </span>
        </div>
      </Link>
    ))}
  </div>
);

const CoursesTabs: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredByCategory = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filter = (cat: CourseCategory) =>
      coursePosts.filter((p) => {
        if (p.category !== cat) return false;
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.speakerName.toLowerCase().includes(q) ||
          p.topic.toLowerCase().includes(q)
        );
      });
    return {
      cliente: filter('cliente'),
      conferencista: filter('conferencista'),
    };
  }, [query]);

  return (
    <section id="cursos" className="py-24 md:py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 uppercase tracking-[0.3em] text-xs font-medium">
              Biblioteca
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Cada video, una <span className="italic font-light text-white/60">lección.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Filtra por speaker, tema o rol. Encuentra el contenido que necesitas para elevar tu decisión — o tu carrera.
          </p>
        </div>

        <div className="relative max-w-xl mb-12">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por speaker, tema o título..."
            className="pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-none focus-visible:ring-orange-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 h-5 w-5" />
        </div>

        <Tabs defaultValue="conferencista" className="w-full">
          <TabsList className="bg-transparent border-b border-white/10 rounded-none w-full justify-start h-auto p-0 mb-12 gap-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 px-0 py-4 rounded-none bg-transparent text-white/50 data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:shadow-none uppercase tracking-widest text-xs font-medium"
              >
                {tab.icon}
                <span>{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => {
            const posts = filteredByCategory[tab.value];
            return (
              <TabsContent key={tab.value} value={tab.value} className="animate-fade-in mt-0">
                <div className="mb-12 max-w-3xl">
                  <span className="text-orange-500 uppercase tracking-[0.3em] text-xs font-medium">
                    {tab.chapter}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mt-4 mb-4 leading-tight">
                    {tab.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">{tab.description}</p>
                </div>
                {posts.length === 0 ? (
                  <p className="text-center text-white/50 py-24 border border-white/10">
                    {tab.emptyMessage}
                  </p>
                ) : (
                  <CourseGrid posts={posts} />
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default CoursesTabs;
