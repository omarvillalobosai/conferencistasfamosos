
import React from 'react';
import { Youtube } from 'lucide-react';

interface FeaturedVideoProps {
  videoId: string;
  speakerName: string;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ videoId, speakerName }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
          <Youtube className="text-red-600 mr-3" size={32} />
          Conferencia Destacada
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${speakerName} - Conferencia Destacada`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold">{speakerName} en acción</h3>
            <p className="text-gray-600 mt-2">
              Mira a {speakerName} en una de sus conferencias más impactantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
