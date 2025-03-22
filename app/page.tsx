// app/page.tsx を更新
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import EsportsExplained from '@/components/EsportsExplained';
import VenueAtmosphere from '@/components/VenueAtmosphere';
import Testimonials from '@/components/Testimonials';
import ExpertRecommendation from '@/components/ExpertRecommendation';
import PricingInfo from '@/components/PricingInfo';
import ContactCTA from '@/components/ContactCTA';
import FadeInSection from '@/components/FadeInSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <HeroSection />
      
      <FadeInSection>
        <ExperienceSection />
      </FadeInSection>
      
      <FadeInSection>
        <EsportsExplained />
      </FadeInSection>
      
      <FadeInSection>
        <VenueAtmosphere />
      </FadeInSection>
      
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      
      <FadeInSection>
        <ExpertRecommendation />
      </FadeInSection>
      
      <FadeInSection>
        <PricingInfo />
      </FadeInSection>
      
      <FadeInSection>
        <ContactCTA />
      </FadeInSection>
      
      <Footer />
    </main>
  );
}