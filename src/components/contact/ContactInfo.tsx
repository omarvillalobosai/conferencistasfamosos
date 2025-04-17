
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const ContactInfo: React.FC = () => {
  const whatsappNumber = '523324166849';
  const prefilledMessage = encodeURIComponent('Me interesa más información sobre ConferencistasFamosos.');
  const emailAddress = 'agencia@conferencistasfamosos.com';
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <Mail className="text-orange-500 mr-3 mt-1 h-5 w-5" />
          <div>
            <p className="font-medium">Correo electrónico</p>
            <a href={`mailto:${emailAddress}`} className="text-orange-500 hover:underline">
              {emailAddress}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="text-orange-500 mr-3 mt-1 h-5 w-5" />
          <div>
            <p className="font-medium">WhatsApp</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-orange-500 hover:underline"
            >
              +52 332 416 6849
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
