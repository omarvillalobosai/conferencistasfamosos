import React, { useMemo } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, PlayCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts, getYoutubeThumbnail, formatBlogDate } from '@/data/blogPosts';

const BlogSection = () => {
  const featured = useMemo(() => {
    const seen = new Set<string>();
    const picked: typeof blogPosts = [];
    for (const p of blogPosts) {
      if (seen.has(p.speakerId)) continue;
      seen.add(p.speakerId);
      picked.push(p);
      if (picked.length === 3) break;
    }
    return picked;
  }, []);

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Blog</h2>
          <p className="text-lg text-gray-700">
            Videos y reflexiones de los conferencistas más influyentes de Latinoamérica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((post) => (
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

                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-600 mb-3 gap-4">
                    <span className="inline-flex items-center">
                      <User className="h-4 w-4 mr-1" /> {post.speakerName}
                    </span>
                    <span className="inline-flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatBlogDate(post.publishedAt)}
                    </span>
                  </div>
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-500 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3">{post.description}</p>
                </CardContent>

                <CardFooter className="pt-0">
                  <span className="text-orange-500 group-hover:text-orange-600 font-medium inline-flex items-center">
                    Ver video <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Ver todos los artículos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
