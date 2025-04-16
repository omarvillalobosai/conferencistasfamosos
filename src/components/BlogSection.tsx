
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: '¿Qué hace realmente grande a un conferencista?',
    excerpt: 'Descubre las cualidades esenciales que distinguen a un conferencista excepcional y cómo estas impactan en la audiencia...',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: '12 Enero, 2025',
    readTime: '5 min'
  },
  {
    id: 2,
    title: '5 claves para elegir el speaker ideal para tu evento',
    excerpt: 'La selección del conferencista adecuado puede marcar la diferencia entre un evento ordinario y uno extraordinario...',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    date: '5 Febrero, 2025',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Los conferencistas más influyentes del 2025',
    excerpt: 'Un análisis detallado de los oradores que están transformando la industria y generando mayor impacto en las audiencias...',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80',
    date: '20 Marzo, 2025',
    readTime: '6 min'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Blog</h2>
          <p className="text-lg text-gray-700">
            Recursos, consejos y tendencias sobre conferenciantes y eventos de impacto.
          </p>
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
