
import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { Speaker } from '@/data/speakersData';

interface SpeakersSchemaProps {
  speakers: Speaker[];
}

const SpeakersSchema: React.FC<SpeakersSchemaProps> = ({ speakers }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              ${speakers.map((speaker, index) => `
              {
                "@type": "ListItem",
                "position": ${index + 1},
                "item": {
                  "@type": "Person",
                  "name": "${speaker.name}",
                  "description": "${speaker.shortBio}",
                  "image": "${speaker.image}",
                  "jobTitle": "Conferencista",
                  "specialty": "${speaker.specialty}"
                }
              }`).join(',')}
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SpeakersSchema;
