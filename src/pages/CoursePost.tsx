import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, ArrowLeft, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import QuoteWizard from '@/components/QuoteWizard';
import {
  findCoursePostBySlug,
  getRelatedCoursePosts,
  getYoutubeThumbnail,
  formatCourseDate,
} from '@/data/coursePosts';

const BASE_URL = 'https://conferencistasfamosos.com';

const categoryLabel = (c: 'cliente' | 'conferencista') =>
  c === 'cliente' ? 'Soy cliente' : 'Quiero ser conferencista';

const CoursePost = () => {
  const { slug } = useParams();
  const post = findCoursePostBySlug(slug);
  const [wizardOpen, setWizardOpen] = useState(false);

  if (!post) {
    return <Navigate to="/not-found" replace />;
  }

  const related = getRelatedCoursePosts(post);
  const canonical = `${BASE_URL}/cursos/${post.slug}`;
  const thumbnail = getYoutubeThumbnail(post.youtubeId);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: post.title,
    description: post.description,
    thumbnailUrl: [thumbnail],
    uploadDate: post.publishedAt,
    embedUrl: `https://www.youtube.com/embed/${post.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${post.youtubeId}`,
    publisher: {
      '@type': 'Organization',
      name: 'Conferencistas Famosos',
    },
  };

  return (
    <>
      <Helmet defer={false}>
        <title>{`${post.title} | Cursos`}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={thumbnail} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main className="min-h-screen pt-24 bg-white">
        <article className="container mx-auto max-w-4xl px-4 py-8">
          <Link
            to="/cursos"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Volver a cursos
          </Link>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded uppercase tracking-wide">
              {categoryLabel(post.category)}
            </span>
            <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded uppercase tracking-wide">
              {post.topic}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <Link
              to={`/speaker/${post.speakerId}`}
              className="inline-flex items-center hover:text-orange-500"
            >
              <User className="h-4 w-4 mr-1" /> {post.speakerName}
            </Link>
            <span className="inline-flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> {formatCourseDate(post.publishedAt)}
            </span>
          </div>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg bg-black mb-8"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${post.youtubeId}`}
              title={post.title}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">{post.description}</p>

          <div className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              ¿Quieres contratar a {post.speakerName} para tu evento?
            </h2>
            <p className="mb-6 opacity-95">
              Solicita una cotización personalizada y llevemos esta experiencia a tu empresa.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={() => setWizardOpen(true)}
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                size="lg"
              >
                Solicitar cotización
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600"
              >
                <Link to={`/speaker/${post.speakerId}`}>Ver perfil del speaker</Link>
              </Button>
            </div>
          </div>

          {related.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Cursos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} to={`/cursos/${r.slug}`} className="group">
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={getYoutubeThumbnail(r.youtubeId)}
                          alt={r.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="pt-4 flex-grow">
                        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-0.5 rounded mb-2">
                          {r.topic}
                        </span>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 line-clamp-2">
                          {r.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/cursos">
                    Ver todos los cursos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
};

export default CoursePost;
