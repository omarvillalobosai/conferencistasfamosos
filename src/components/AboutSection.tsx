
import React from 'react';
import AboutHeading from './about/AboutHeading';
import AboutImage from './about/AboutImage';
import OurMission from './about/OurMission';
import ValueProposition from './about/ValueProposition';
import FounderInfo from './about/FounderInfo';

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <AboutHeading />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AboutImage />
          
          <div className="space-y-8">
            <OurMission />
            <ValueProposition />
            <FounderInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
