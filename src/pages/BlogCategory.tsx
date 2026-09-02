import React, { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, PlayCircle, User } from 'lucide-react';
import {
  blogPosts,
  getPostsByCategorySlug,
  getCategorySlug,
  getPostThumbnail,
  formatBlogDate,
} from '@/data/blogPosts';

const BASE_URL = 'https://conferencistasfamosos.com';

const BlogCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const posts = useMemo(
    () => (categorySlug ? getPostsByCategorySlug(categorySlug) : []),
    [categorySlug]
  );

  const categoryName = posts[0]?.category;

  if (!categorySlug || !categoryName) {
    return <Navigate to="/blog" replace />;
  }

  const canonical = `${BASE_URL}/blog/categoria/${categorySlug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryName} | Conferencistas Famosos`,
    description: `Artículos y comparativos de la categoría ${categoryName} de Conferencistas Famosos.`,
    url: canonical,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `${BASE_URL}/blog/${post.slug}`,
      })),
    },
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{`${categoryName} | Conferencistas Famosos`}</title>
        <meta
          name="description"
          content={`Descubre los artículos de ${categoryName} en Conferencistas Famosos: comparativas, rankings y contenido seleccionado de los speakers más influyentes de Latinoamérica.`}
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${categoryName} | Conferencistas Famosos`} />
        <meta
          property="og:description"
          content={`Artículos de ${categoryName}: rankings y comparativas de conferencistas famosos en Latinoamérica.`}
        />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-4 font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Volver al blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Rankings de conferencistas más influyentes de Latinoamérica
              </h1>
              <p className="text-lg text-gray-700">
                Comparativas seleccionadas de los speakers de habla hispana con mayor impacto. Ideal para elegir al conferencista adecuado para tu evento.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {posts.length === 0 ? (
              <p className="text-center text-gray-600 py-20">
                No hay artículos en esta categoría todavía.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                      <div className="relative aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={getPostThumbnail(post)}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {post.type !== 'ranking' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <PlayCircle className="h-16 w-16 text-white drop-shadow-lg" />
                          </div>
                        )}
                      </div>

                      <CardContent className="pt-6 flex-grow flex flex-col">
                        <div className="flex items-center text-sm text-gray-600 mb-3 gap-4">
                          <span className="inline-flex items-center">
                            <User className="h-4 w-4 mr-1" /> {post.type === 'ranking' ? 'Ranking' : post.speakerName}
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

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">Ver todos los artículos</Link>
              </Button>
            </div>
          </div>
        </section>
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default BlogCategory;
