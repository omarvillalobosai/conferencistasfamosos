import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
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
  title: string;
  description: string;
  emptyMessage: string;
}

const tabs: TabConfig[] = [
  {
    value: 'cliente',
    label: 'Soy Cliente',
    icon: <Mic className="h-5 w-5" />,
    title: '¿Vas a contratar a un conferencista?',
    description:
      'Videos y guías para ayudarte a elegir al speaker correcto, evitar errores comunes y organizar eventos memorables.',
    emptyMessage: 'Muy pronto publicaremos videos exclusivos para clientes. ¡Vuelve pronto!',
  },
  {
    value: 'conferencista',
    label: 'Quiero ser conferencista',
    icon: <Rocket className="h-5 w-5" />,
    title: '¿Quieres ser un conferencista famoso?',
    description:
      'Aprende de los mejores. Videos estratégicos sobre marca personal, escenario, storytelling y posicionamiento profesional.',
    emptyMessage: 'Muy pronto publicaremos más videos en esta categoría.',
  },
];

const CourseGrid: React.FC<{ posts: CoursePost[] }> = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <Link key={post.slug} to={`/cursos/${post.slug}`} className="group">
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
                {formatCourseDate(post.publishedAt)}
              </span>
            </div>
            <span className="inline-block self-start bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
              {post.topic}
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
    <section id="cursos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative max-w-lg mx-auto mb-10">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por speaker, tema o título..."
            className="pl-10 pr-4 py-2 rounded-full border-gray-300 bg-white"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 h-5 w-5" />
        </div>

        <Tabs defaultValue="conferencista" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-xl">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 px-4 py-3"
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => {
            const posts = filteredByCategory[tab.value];
            return (
              <TabsContent key={tab.value} value={tab.value} className="animate-fade-in">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4">{tab.title}</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{tab.description}</p>
                </div>
                {posts.length === 0 ? (
                  <p className="text-center text-gray-600 py-16">{tab.emptyMessage}</p>
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
