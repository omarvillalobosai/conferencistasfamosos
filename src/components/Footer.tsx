
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { getSpeakerSlug } from '@/utils/speakerUtils';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-6">
              Conferencistas<span className="text-orange-500">Famosos</span>
            </h3>
            <p className="mb-6">
              Conectamos a los mejores conferencistas de habla hispana con los eventos más importantes de Latinoamérica y el mundo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#quienes-somos" className="hover:text-orange-500 transition-colors">Quiénes somos</Link>
              </li>
              <li>
                <Link to="/#conferencistas" className="hover:text-orange-500 transition-colors">Conferencistas</Link>
              </li>
              <li>
                <Link to="/#destacado" className="hover:text-orange-500 transition-colors">Omar Villalobos</Link>
              </li>
              <li>
                <Link to="/#testimonios" className="hover:text-orange-500 transition-colors">Testimonios</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/#contacto" className="hover:text-orange-500 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Conferencistas</h4>
            <ul className="space-y-3">
              <li>
                <Link to={`/speaker/${getSpeakerSlug("Omar Villalobos")}`} className="hover:text-orange-500 transition-colors font-medium">Omar Villalobos</Link>
              </li>
              <li>
                <Link to={`/speaker/${getSpeakerSlug("Yordi Rosado")}`} className="hover:text-orange-500 transition-colors">Yordi Rosado</Link>
              </li>
              <li>
                <Link to={`/speaker/${getSpeakerSlug("Daniel Habif")}`} className="hover:text-orange-500 transition-colors">Daniel Habif</Link>
              </li>
              <li>
                <Link to={`/speaker/${getSpeakerSlug("Gaby Vargas")}`} className="hover:text-orange-500 transition-colors">Gaby Vargas</Link>
              </li>
              <li>
                <Link to={`/speaker/${getSpeakerSlug("Vilma Núñez")}`} className="hover:text-orange-500 transition-colors">Vilma Núñez</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@conferencistasfamosos.com" className="hover:text-orange-500 transition-colors">
                  info@conferencistasfamosos.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+525512345678" className="hover:text-orange-500 transition-colors">
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                <address className="not-italic">
                  Ciudad de México, México
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ConferencistasFamosos.com. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/terminos" className="hover:text-orange-500 transition-colors">
                Términos y condiciones
              </Link>
              <Link to="/privacidad" className="hover:text-orange-500 transition-colors">
                Política de privacidad
              </Link>
              <Link to="/politicas-viaje" className="hover:text-orange-500 transition-colors">
                Políticas de viaje
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
