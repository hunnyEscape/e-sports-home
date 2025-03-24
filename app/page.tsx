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
import ExpertRecommendation2 from '@/components/ExpertRecommendation2';
import PricingInfo from '@/components/PricingInfo';
import ContactCTA from '@/components/ContactCTA';
import CampaignCTA from '@/components/CampaignCTA';
import FadeInSection from '@/components/FadeInSection';
import CVHeroSection from '@/components/cv/CVHeroSection';
import EmpathySection from '@/components/cv/EmpathySection';
import HopeSection from '@/components/cv/HopeSection';
import ResultsSection from '@/components/cv/ResultsSection';
import { Simonetta } from 'next/font/google';

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header/>
			<HeroSection/>
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
				<CVHeroSection />
			</FadeInSection>

			<FadeInSection>
				<EmpathySection />
			</FadeInSection>

			<FadeInSection>
				<HopeSection />
			</FadeInSection>

			{/*<FadeInSection>
        <Testimonials />
      </FadeInSection>*/}
			<FadeInSection>
				<ExpertRecommendation />
			</FadeInSection>
			
			{/*
			<FadeInSection>
				<PricingInfo />
			</FadeInSection>
			*/}
			

			<FadeInSection>
				<CampaignCTA />
			</FadeInSection>

			<Footer />
		</main>
	);
}