
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import WhyHireUs from './WhyHireUs';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Solicita una Cotización</h2>
          <p className="text-lg text-gray-700">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <ContactInfo />
              <WhyHireUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
