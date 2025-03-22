// app/cv/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CVHeroSection from '@/components/cv/CVHeroSection';
import EmpathySection from '@/components/cv/EmpathySection';
import HopeSection from '@/components/cv/HopeSection';
import ResultsSection from '@/components/cv/ResultsSection';
import CVTestimonialsSection from '@/components/cv/CVTestimonialsSection';
import AchievementsSection from '@/components/cv/AchievementsSection';
import ContactForm from '@/components/cv/ContactForm';

export default function CVPage() {
	return (
		<main className="min-h-screen">
			<Header />

			<CVHeroSection />

			<EmpathySection />

			<HopeSection />

			<ResultsSection />

			<CVTestimonialsSection />

			<AchievementsSection />

			<ContactForm />

			<Footer />
		</main>
	);
}