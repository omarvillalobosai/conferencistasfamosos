
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { speakers } from '@/data/speakersData';
import { findSpeakerBySlug, getVideoIdForSpeaker, getSpeakerSlug } from '@/utils/speakerUtils';

// Import components
import SpeakerHero from '@/components/speaker-detail/SpeakerHero';
import FeaturedVideo from '@/components/speaker-detail/FeaturedVideo';
import Biography from '@/components/speaker-detail/Biography';
import ConferenceTopics from '@/components/speaker-detail/ConferenceTopics';
import ContactCTA from '@/components/speaker-detail/ContactCTA';
import WhatsAppContact from '@/components/speaker-detail/WhatsAppContact';
import SpeakerNavigation from '@/components/speaker-detail/SpeakerNavigation';

const SpeakerDetail = () => {
  const { slug } = useParams();
  
  // Find the speaker using the utility function
  const { 
    speaker, 
    speakerIndex, 
    prevSpeakerIndex, 
    nextSpeakerIndex 
  } = findSpeakerBySlug(slug);
  
  // If speaker not found, redirect to 404
  if (!speaker) {
    return <Navigate to="/not-found" />;
  }

  // Topics/conferences specific to each speaker, with a generic fallback
  const defaultTopics = [
    "Liderazgo transformacional",
    "Comunicación efectiva",
    "Inteligencia emocional",
    "Desarrollo de equipos de alto rendimiento",
    "Motivación y superación personal"
  ];
  const topics = speaker.topics && speaker.topics.length > 0 ? speaker.topics : defaultTopics;
  
  // Get previous and next speaker info
  const prevSpeakerSlug = getSpeakerSlug(speakers[prevSpeakerIndex].name);
  const nextSpeakerSlug = getSpeakerSlug(speakers[nextSpeakerIndex].name);
  
  // Get the featured video ID
  const featuredVideoId = getVideoIdForSpeaker(speaker.name);

  return (
    <>
      <Helmet defer={false}>
        <title>{`${speaker.name} | Conferencista`}</title>
        <meta
          name="description"
          content={`${speaker.name}, conferencista en ${speaker.specialty}. Contrátalo para tu próximo evento.`}
        />
        <link rel="canonical" href={`https://conferencistasfamosos.com/speaker/${slug}`} />
        <meta property="og:title" content={`${speaker.name} | Conferencista`} />
        <meta property="og:description" content={`${speaker.shortBio}`} />
        <meta property="og:url" content={`https://conferencistasfamosos.com/speaker/${slug}`} />
        <meta property="og:image" content={speaker.image} />
        <meta name="keywords" content={`${speaker.name}, conferencista, ${speaker.tags.join(', ')}, conferencias, eventos, charlas`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: speaker.name,
          jobTitle: "Conferencista",
          description: speaker.shortBio,
          image: speaker.image,
          url: `https://conferencistasfamosos.com/speaker/${slug}`,
          knowsAbout: speaker.tags,
          worksFor: {
            "@type": "Organization",
            name: "ConferencistasFamosos.com",
            url: "https://conferencistasfamosos.com"
          }
        })}</script>
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <SpeakerHero speaker={speaker} />
        
        {/* Video Section */}
        <FeaturedVideo videoId={featuredVideoId} speakerName={speaker.name} />
        
        {/* Biography Section */}
        <Biography speakerName={speaker.name} specialty={speaker.specialty} fullBio={speaker.fullBio} />
        
        {/* Conference Topics Section */}
        <ConferenceTopics topics={topics} />
        
        {/* Contact CTA Section */}
        <ContactCTA speakerName={speaker.name} />
        
        {/* WhatsApp Contact Section */}
        <WhatsAppContact />
        
        {/* Bottom Navigation */}
        <SpeakerNavigation 
          prevSpeakerName={speakers[prevSpeakerIndex].name}
          nextSpeakerName={speakers[nextSpeakerIndex].name}
          prevSpeakerSlug={prevSpeakerSlug}
          nextSpeakerSlug={nextSpeakerSlug}
        />
      </main>
      <Footer />
    </>
  );
};

export default SpeakerDetail;
