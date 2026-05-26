
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    id: 1,
    title: '¿Qué hace realmente grande a un conferencista?',
    excerpt: 'Descubre las cualidades esenciales que distinguen a un conferencista excepcional y cómo estas impactan en la audiencia y pueden transformar un evento ordinario en una experiencia inolvidable.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: '12 Enero, 2025',
    readTime: '5 min',
    category: 'Conferencias'
  },
  {
    id: 2,
    title: '5 claves para elegir el speaker ideal para tu evento',
    excerpt: 'La selección del conferencista adecuado puede marcar la diferencia entre un evento ordinario y uno extraordinario. Aprende las 5 claves fundamentales para tomar la mejor decisión.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: '5 Febrero, 2025',
    readTime: '7 min',
    category: 'Eventos'
  },
  {
    id: 3,
    title: 'Los conferencistas más influyentes del 2025',
    excerpt: 'Un análisis detallado de los oradores que están transformando la industria y generando mayor impacto en las audiencias. Descubre qué los hace destacar y cómo aplican sus técnicas.',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80',
    date: '20 Marzo, 2025',
    readTime: '6 min',
    category: 'Tendencias'
  },
  {
    id: 4,
    title: 'Cómo Omar Villalobos transforma empresas a través de sus conferencias',
    excerpt: 'Un recorrido por el impacto medible que las conferencias de Omar Villalobos han tenido en organizaciones de diversos sectores. Casos de estudio y testimonios reales.',
    image: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: '8 Abril, 2025',
    readTime: '9 min',
    category: 'Caso de éxito'
  },
  {
    id: 5,
    title: 'El futuro de los eventos corporativos post-pandemia',
    excerpt: 'Las nuevas tendencias en eventos corporativos y cómo los conferencistas se están adaptando al nuevo paradigma. Formatos híbridos y tecnologías emergentes.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80',
    date: '15 Mayo, 2025',
    readTime: '7 min',
    category: 'Tendencias'
  },
  {
    id: 6,
    title: 'El poder del storytelling en las conferencias de alto impacto',
    excerpt: 'Por qué las historias son la herramienta más poderosa de un conferencista y cómo utilizarlas para generar conexiones emocionales duraderas con la audiencia.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: '2 Junio, 2025',
    readTime: '8 min',
    category: 'Técnicas'
  },
];

const categories = ["Todos", "Conferencias", "Eventos", "Tendencias", "Técnicas", "Caso de éxito"];

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
              <p className="text-lg text-gray-700 mb-8">
                Recursos, consejos y tendencias sobre conferenciantes y eventos de impacto.
              </p>
              <div className="relative max-w-lg mx-auto">
                <Input 
                  type="text" 
                  placeholder="Buscar en el blog..." 
                  className="pl-10 pr-4 py-2 rounded-full border-gray-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant={category === "Todos" ? "default" : "outline"} 
                  className={category === "Todos" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime} lectura</span>
                      </div>
                    </div>
                    
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
                      {post.category}
                    </span>
                    
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-700">{post.excerpt}</p>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button variant="ghost" className="text-orange-500 hover:text-orange-600 p-0 h-auto">
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <div className="flex space-x-1">
                {[1, 2, 3].map((page) => (
                  <Button 
                    key={page} 
                    variant={page === 1 ? "default" : "outline"} 
                    className={page === 1 ? "bg-orange-500 hover:bg-orange-600" : ""}
                    size="sm"
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
