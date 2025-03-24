-e 
### FILE: ./types/index.ts

// types/index.ts

// ナビゲーションリンクの型
export interface NavItem {
	label: string;
	href: string;
	isButton?: boolean;
}

// 体験者の声の型
export interface Testimonial {
	id: string;
	name: string;
	age: number;
	location: string;
	image: string;
	quote: string;
	benefits: string[];
	highlight: string;
	rating: 1 | 2 | 3 | 4 | 5;
}

// 専門家の型
export interface Expert {
	id: string;
	name: string;
	title: string;
	image: string;
	quote: string;
}

// 料金プランの型
export interface PricingPlan {
	persons: number;
	pricePerPerson: number;
	benefits?: string[];
}

// よくある質問の型
export interface FAQ {
	question: string;
	answer: string;
}

// お問い合わせフォーム入力の型
export interface ContactFormInput {
	name: string;
	phone?: string;
	email: string;
	preferredDate?: string;
	message?: string;
	participants: string;
}

// コンポーネントのProps型も追加しておきます
export interface HeroSectionProps {
	title: string;
	subtitle: string;
	ctaText: string;
	ctaLink: string;
	secondaryCtaText?: string;
	secondaryCtaLink?: string;
	imageSrc: string;
	imageAlt: string;
  }
  
  export interface SectionProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
  }-e 
### FILE: ./tailwind.config.js

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#4A90E2',
				secondary: '#F5C518',
				accent: '#FADADD',
				background: '#F2F4F5',
				'background-light': '#E6F0FF',
				'text': '#333333',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
}-e 
### FILE: ./postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
-e 
### FILE: ./app/cv/page.tsx

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

			<ResultsSection/>

			<CVTestimonialsSection />

			<AchievementsSection />

			<ContactForm />

			<Footer />
		</main>
	);
}-e 
### FILE: ./app/layout.tsx

// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'シニアeスポーツ体験 | 60歳からの新しい楽しみ',
	description: '笑って、遊んで、ちょっと若返る。シニア向けeスポーツ体験スペースで認知症予防、交流促進、楽しい時間を過ごしましょう。初めての方でも安心して楽しめます。',
	keywords: 'シニア, eスポーツ, 高齢者, ゲーム, 認知症予防, 脳トレ, 交流, 健康',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className="scroll-smooth">
			<body className={inter.className}>
				<SmoothScroll />
				{children}
			</body>
		</html>
	);
}-e 
### FILE: ./app/page.tsx

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
}-e 
### FILE: ./components/ReferenceModal.tsx

import { useEffect } from 'react';

export default function ReferenceModal({
	isOpen,
	onClose,
	references
}: {
	isOpen: boolean;
	onClose: () => void;
	references: string[];
}) {
	useEffect(() => {
		if (!isOpen) return;

		// スクロール禁止
		document.body.style.overflow = 'hidden';

		// Escapeキーで閉じる処理
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleEsc);

		return () => {
			// スクロール解除
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleEsc);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg max-w-2xl w-full shadow-lg relative">
				<h2 className="text-xl font-bold mb-4">参考文献</h2>
				<ol className="space-y-2 text-sm text-gray-700 max-h-[60vh] overflow-y-auto pr-2">
					{references.map((ref, idx) => (
						<li key={idx}>{ref}</li>
					))}
				</ol>
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
					aria-label="Close modal"
				>
					✕
				</button>
			</div>
		</div>
	);
}
-e 
### FILE: ./components/SmoothScroll.tsx

// components/SmoothScroll.tsx
'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
	useEffect(() => {
		// 内部リンク（#で始まるリンク）のクリックイベントをキャプチャ
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a');

			if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
				e.preventDefault();

				const targetId = anchor.hash.slice(1);
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					// ヘッダーの高さを考慮したスクロール位置の計算
					const headerHeight = 80; // ヘッダーの高さをピクセルで指定
					const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth'
					});

					// URLをハッシュ付きに更新（履歴に残さない）
					history.replaceState(null, '', anchor.hash);
				}
			}
		};

		document.addEventListener('click', handleAnchorClick);

		return () => {
			document.removeEventListener('click', handleAnchorClick);
		};
	}, []);

	return null;
}-e 
### FILE: ./components/StoreAtmosphere.tsx

// components/VenueAtmosphere.tsx
import Image from 'next/image';

export default function StoreAtmosphere() {
	return (
		<section id="venue" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						まるで友人の家。<span className="text-primary">くつろげる空間</span>です
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">安心して楽しめる、居心地の良い空間をご用意しています</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<div className="rounded-xl overflow-hidden shadow-lg">
						<div className="aspect-w-16 aspect-h-9 bg-gray-200">
							<div className="flex items-center justify-center h-full text-gray-400">
								会場内観の画像がここに表示されます
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-center">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							明るく清潔感のあるプレイエリア
						</h3>
						<p className="text-lg text-gray-700 mb-6">
							木目調と白壁を基調とした明るい空間で、観葉植物を配置して温かみのある
							雰囲気を演出しています。まるで友人の家に遊びに来たような心地よさを大切にしています。
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="bg-background-light rounded-lg p-4">
								<h4 className="text-xl font-semibold text-gray-800 mb-2">
									くつろぎのソファ席
								</h4>
								<p className="text-gray-700">
									ゆったりとしたソファで、リラックスしながらプレイできます。
								</p>
							</div>

							<div className="bg-background-light rounded-lg p-4">
								<h4 className="text-xl font-semibold text-gray-800 mb-2">
									飲み物・おやつ
								</h4>
								<p className="text-gray-700">
									コーヒーやお茶、軽いおやつをご用意しています。
								</p>
							</div>

							<div className="bg-background-light rounded-lg p-4">
								<h4 className="text-xl font-semibold text-gray-800 mb-2">
									バリアフリー設計
								</h4>
								<p className="text-gray-700">
									段差のない床や手すり付きトイレで安心してご利用いただけます。
								</p>
							</div>

							<div className="bg-background-light rounded-lg p-4">
								<h4 className="text-xl font-semibold text-gray-800 mb-2">
									衛生対策
								</h4>
								<p className="text-gray-700">
									空気清浄機の設置や定期的な消毒で安心・安全を確保しています。
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-background rounded-xl p-8 shadow-md">
					<div className="md:flex items-center">
						<div className="md:w-2/3 md:pr-8">
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								専門スタッフが丁寧にサポート
							</h3>
							<p className="text-lg text-gray-700 mb-6">
								介護福祉士の資格を持ったスタッフが常駐し、皆さまの体験を楽しくサポートします。
								操作方法に不安がある方も、一つひとつ丁寧にご説明いたしますので安心してご参加ください。
							</p>

							<div className="flex flex-wrap gap-4">
								<div className="flex items-center bg-white rounded-full py-2 px-4">
									<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</div>
									<span className="text-gray-800 font-medium">資格保有スタッフ</span>
								</div>

								<div className="flex items-center bg-white rounded-full py-2 px-4">
									<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
										</svg>
									</div>
									<span className="text-gray-800 font-medium">安心の見守り</span>
								</div>

								<div className="flex items-center bg-white rounded-full py-2 px-4">
									<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									</div>
									<span className="text-gray-800 font-medium">親身な対応</span>
								</div>
							</div>
						</div>

						<div className="mt-6 md:mt-0 md:w-1/3">
							<div className="rounded-xl overflow-hidden shadow-md">
								<div className="aspect-w-1 aspect-h-1 bg-gray-200">
									<div className="flex items-center justify-center h-full text-gray-400">
										スタッフ画像がここに表示されます
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 text-center">
					<h3 className="text-2xl font-bold text-gray-800 mb-4">
						安心してご来店ください
					</h3>
					<p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
						まずは見学だけでもOKです。どうぞお気軽にのぞいてみてください。
						スタッフ一同、皆さまのお越しを心よりお待ちしております。
					</p>

					<div className="bg-accent inline-block rounded-lg py-3 px-6 shadow-md">
						<p className="text-xl font-bold text-gray-800">
							「ここなら安心して楽しめそう」と感じていただける空間づくりを心がけています
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/FadeInSection.tsx

// components/FadeInSection.tsx
'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInSectionProps {
	children: ReactNode;
	className?: string;
}

export default function FadeInSection({ children, className = '' }: FadeInSectionProps) {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				setIsVisible(true);
				// 一度表示されたら監視を停止
				if (domRef.current) observer.unobserve(domRef.current);
			}
		});

		if (domRef.current) {
			observer.observe(domRef.current);
		}

		return () => {
			if (domRef.current) observer.unobserve(domRef.current);
		};
	}, []);

	return (
		<div
			ref={domRef}
			className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
		>
			{children}
		</div>
	);
}-e 
### FILE: ./components/EsportsExplained.tsx

// components/EsportsExplained.tsx
import Image from 'next/image';

export default function EsportsExplained() {
	const imageSrc = "/EsportsExplained.png";
	const imageAlt = "シニアの方々がゲームを楽しむ様子";
	return (
		<section id="esports" className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						<span className="text-secondary">"e"</span>スポーツって何？
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-primary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">ゲームで楽しく脳トレ！ シニアの健康をサポート</p>
				</div>

				<div className="md:flex items-center md:space-x-8">
					<div className="md:w-1/2">
						<div className="bg-white rounded-xl overflow-hidden shadow-lg">
							<div className="aspect-w-16 aspect-h-9 bg-gray-200">
								<Image
									src={imageSrc}
									alt={imageAlt}
									fill
									style={{ objectFit: 'cover' }}
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						</div>
					</div>

					<div className="mt-8 md:mt-0 md:w-1/2">
						<div className="bg-white rounded-xl p-6 shadow-md">
							<h3 className="text-2xl font-bold text-primary mb-4">
								シニア向けeスポーツとは？
							</h3>
							<p className="text-lg text-gray-700 mb-6">
								「eスポーツ」とは「エレクトロニック・スポーツ」の略で、デジタルゲームを使った娯楽・競技のことです。
								シニア向けには特に<span className="font-bold">脳トレ効果</span>、<span className="font-bold">反射神経維持</span>、<span className="font-bold">交流</span>を
								目的とした、簡単で楽しいゲームをご用意しています。
							</p>

							<div className="space-y-4">
								<div className="flex items-start">
									<div className="flex-shrink-0 w-12 h-12 bg-background-light rounded-full flex items-center justify-center text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
									<div className="ml-4">
										<h4 className="text-xl font-semibold text-gray-800">認知機能の維持・向上</h4>
										<p className="text-lg text-gray-700">新しいことを学び、瞬時に判断することで脳を活性化します。</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 w-12 h-12 bg-background-light rounded-full flex items-center justify-center text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</div>
									<div className="ml-4">
										<h4 className="text-xl font-semibold text-gray-800">社会的なつながり</h4>
										<p className="text-lg text-gray-700">一緒にゲームをすることで自然と会話が生まれ、新しい交流が広がります。</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 w-12 h-12 bg-background-light rounded-full flex items-center justify-center text-primary">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<div className="ml-4">
										<h4 className="text-xl font-semibold text-gray-800">楽しさと達成感</h4>
										<p className="text-lg text-gray-700">ゲームクリアや高得点を目指すことで、日常に新しい楽しみと目標ができます。</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
						<div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold text-gray-800 mb-2">
							簡単操作
						</h3>
						<p className="text-lg text-gray-700">
							2〜3つのボタンだけで遊べる簡単なゲームを厳選しています。
						</p>
					</div>

					<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
						<div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold text-gray-800 mb-2">
							交流が生まれる
						</h3>
						<p className="text-lg text-gray-700">
							チームプレイでコミュニケーションが自然と生まれます。
						</p>
					</div>

					<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
						<div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<h3 className="text-xl font-bold text-gray-800 mb-2">
							健康効果
						</h3>
						<p className="text-lg text-gray-700">
							認知症予防や脳トレ効果が医学的にも注目されています。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/CampaignCTA.tsx

// components/CampaignCTA.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ContactFormInput } from '@/types';
// 注: types.tsに以下を追加する必要があります
// interface ContactFormInput {
//   name: string;
//   email: string;
//   message?: string;
//   participants: string;
//   preferredDate?: string;
// }

export default function CampaignCTA() {
	const [formData, setFormData] = useState<ContactFormInput>({
		name: '',
		email: '',
		message: '',
		participants: '1',
	});

	const [formErrors, setFormErrors] = useState<Partial<ContactFormInput>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const validateForm = () => {
		const errors: Partial<ContactFormInput> = {};

		if (!formData.name.trim()) {
			errors.name = 'お名前は必須です';
		}

		if (!formData.email.trim()) {
			errors.email = 'メールアドレスは必須です';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = '正しいメールアドレスを入力してください';
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);

		// ここに実際のフォーム送信処理を追加
		// 仮の非同期処理（本番では実際のAPIエンドポイントにPOSTする）
		try {
			await new Promise(resolve => setTimeout(resolve, 1000));
			setSubmitSuccess(true);
			setFormData({ name: '', email: '', message: '', participants: '1', preferredDate: '' });
		} catch (error) {
			console.error('送信エラー:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						まずは<span className="text-primary">体験</span>してみませんか？
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						初めての方も安心して楽しめる環境を整えています
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="bg-background-light rounded-xl overflow-hidden shadow-lg">
						<div className="md:flex">
							<div className="md:w-1/2 p-8">
								<h3 className="text-2xl font-bold text-gray-800 mb-1">
									無料体験会のご予約
								</h3>
								<p className="text-lg text-gray-700 mb-6">
									まずは気軽に体験してみてください。スタッフが丁寧にサポートします。
									友達と一緒に参加するとさらに楽しめます！
								</p>

								<div className="space-y-4">
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">日時</h4>
											<p className="text-gray-700">4月6日(日) 10時-12時<br />説明:15分、体験:45分、観覧・自由時間:60分</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">費用</h4>
											<p className="text-gray-700">無料</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">対象</h4>
											<p className="text-gray-700">60歳以上・先着12名</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">持ち物</h4>
											<p className="text-gray-700">特になし（メガネが必要な方はご持参ください）</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">集合場所</h4>
											<p className="text-gray-700">立川南口に9:45にお集まりください。会場へご案内します。</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">会場(立川駅南口徒歩5分)</h4>
											<p className="text-gray-700">立川市錦町1-4-4 サニービル2F(ファミリーマート立川錦町店の2階)</p>
										</div>
									</div>
								</div>
							</div>

							<div className="md:w-1/2 bg-primary p-8">
								{submitSuccess ? (
									<div className="h-full flex flex-col items-center justify-center text-white">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<h3 className="text-2xl font-bold mb-2">お申し込みありがとうございます</h3>
										<p className="text-lg text-center mb-6">
											ご予約内容を確認し、24時間以内にメールにてご連絡いたします。
										</p>
										<button
											onClick={() => setSubmitSuccess(false)}
											className="bg-white text-primary py-2 px-6 rounded-full font-bold hover:bg-secondary hover:text-white transition-all"
										>
											別の予約をする
										</button>
									</div>
								) : (
									<form onSubmit={handleSubmit} className="text-white">
										<h3 className="text-2xl font-bold mb-6">無料体験予約フォーム</h3>

										<div className="mb-4">
											<label htmlFor="name" className="block text-lg font-medium mb-1">
												お名前 <span className="text-secondary">*</span>
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="例：山田 太郎"
											/>
											{formErrors.name && (
												<p className="mt-1 text-secondary">{formErrors.name}</p>
											)}
										</div>

										<div className="mb-4">
											<label htmlFor="email" className="block text-lg font-medium mb-1">
												メールアドレス <span className="text-secondary">*</span>
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="例：example@email.com"
											/>
											{formErrors.email && (
												<p className="mt-1 text-secondary">{formErrors.email}</p>
											)}
										</div>

										<div className="mb-4">
											<label htmlFor="participants" className="block text-lg font-medium mb-1">
												参加人数 <span className="text-secondary">*</span>
											</label>
											<select
												id="participants"
												name="participants"
												value={formData.participants}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white [&>option]:text-black"
											>
												<option value="1">1名</option>
												<option value="2">2名</option>
												<option value="3">3名</option>
												<option value="4">4名</option>
												<option value="5">5名以上（詳細は備考欄に）</option>
											</select>
										</div>

										<div className="mb-6">
											<label htmlFor="message" className="block text-lg font-medium mb-1">
												ご質問など（任意）
											</label>
											<textarea
												id="message"
												name="message"
												value={formData.message || ''}
												onChange={handleChange}
												rows={3}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="ご質問やご要望があればお書きください"
											></textarea>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-secondary text-gray-800 py-3 px-6 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
										>
											{isSubmitting ? '送信中...' : '予約内容を送信する'}
										</button>

										<p className="mt-4 text-center text-white/80 text-sm">
											※ご入力いただいた情報は、体験予約のご連絡以外には使用いたしません。
										</p>
									</form>
								)}
							</div>
						</div>
					</div>
					<div className="mt-16" id="access">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							集合場所・会場の情報
						</h3>
						<div className="grid md:grid-cols-2 gap-6 mb-6">
							<div className="bg-background rounded-xl overflow-hidden shadow-lg">
								<div className="p-6">
									<h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										集合場所
									</h4>
									<div className="space-y-4">
										<div className="bg-white p-4 rounded-lg shadow-sm">
											<p className="text-lg font-medium text-gray-800">立川駅南口のデッキ案内図前 (2F)</p>
											<p className="text-gray-700">9:45に集合（時間厳守でお願いします）</p>
											<p className="text-gray-600 mt-2 text-sm">※担当スタッフが「シニアeスポーツ」のチラシを持ってお待ちしています</p>
										</div>
										<div className="bg-white p-4 rounded-lg shadow-sm">
											<p className="text-lg font-medium text-primary flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
												集合場所からのご案内
											</p>
											<p className="text-gray-700 mt-1">集合後、担当スタッフが会場まで皆様をご案内します。（徒歩約5分）</p>
										</div>
									</div>
									<div className="bg-gray-200 h-60 flex items-center justify-center mt-5 rounded-md overflow-hidden">
										<img
											src="/meeting-point.jpg"
											alt="立川駅南口の集合場所"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

							{/* カード2: 会場の情報 */}
							<div className="bg-background rounded-xl overflow-hidden shadow-lg">
								<div className="p-6">
									<h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
										</svg>
										会場情報
									</h4>
									<div className="space-y-4">
										<div className="bg-white p-4 rounded-lg shadow-sm">
											<p className="text-lg font-medium text-gray-800">立川市錦町1-4-4 サニービル2F</p>
											<p className="text-gray-700">ファミリーマート立川錦町店の2階</p>
											<p className="text-gray-700">JR「立川駅」南口より徒歩5分</p>
											<p className="text-gray-600 mt-2 text-sm">※建物入口に「シニアeスポーツ体験会」の案内表示があります</p>
										</div>

										<div className="bg-white p-4 rounded-lg shadow-sm">
											<p className="text-lg font-medium text-primary flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
												開場時間
											</p>
											<p className="text-gray-700 mt-1">9:30〜 （受付開始は9:50から）</p>
										</div>
									</div>
									<div className="bg-gray-200 h-full flex items-center justify-center mt-5 rounded-md overflow-hidden">
										<img
											src="/vene-map.png"
											alt="会場の集合場所"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16 text-center">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							新しい楽しみを見つけませんか？
						</h3>
						<p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
							みなさまのお越しを心よりお待ちしております。<br />
							一緒に笑って、遊んで、新しい体験を楽しみましょう！
						</p>

						<Link
							href="#contact"
							className="inline-block bg-secondary text-gray-800 py-4 px-10 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
						>
							無料体験に申し込む
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/cv/AchievementsSection.tsx

// components/cv/AchievementsSection.tsx
import Image from 'next/image';

export default function AchievementsSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						<span className="text-primary">実績</span>・活動紹介
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						各地で広がる「シニアeスポーツ」の取り組み
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<div className="bg-background rounded-xl p-6 text-center">
						<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
							10
						</div>
						<h3 className="text-2xl font-bold text-gray-800 mb-2">導入施設</h3>
						<p className="text-lg text-gray-700">
							高齢者施設や公民館など10箇所で定期開催
						</p>
					</div>

					<div className="bg-background rounded-xl p-6 text-center">
						<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
							500+
						</div>
						<h3 className="text-2xl font-bold text-gray-800 mb-2">参加者数</h3>
						<p className="text-lg text-gray-700">
							これまでに500名以上が体験し、継続率は85%
						</p>
					</div>

					<div className="bg-background rounded-xl p-6 text-center">
						<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
							3
						</div>
						<h3 className="text-2xl font-bold text-gray-800 mb-2">自治体連携</h3>
						<p className="text-lg text-gray-700">
							3つの自治体と連携し、健康促進プログラムとして採用
						</p>
					</div>
				</div>

				<div className="bg-background-light rounded-xl p-8 shadow-md mb-12">
					<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						導入施設からの声
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
									<div className="w-full h-full flex items-center justify-center text-gray-400">
										写真
									</div>
								</div>
								<div>
									<h4 className="text-lg font-bold text-gray-800">山田 美咲</h4>
									<p className="text-primary text-sm">東京都 ○○デイサービスセンター 施設長</p>
								</div>
							</div>

							<p className="text-gray-700">
								「導入してから利用者同士の会話が増え、施設の雰囲気が明るくなりました。特に男性利用者の参加意欲が高まったことが大きな変化です。認知症予防としても効果を実感しています。」
							</p>
						</div>

						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
									<div className="w-full h-full flex items-center justify-center text-gray-400">
										写真
									</div>
								</div>
								<div>
									<h4 className="text-lg font-bold text-gray-800">鈴木 一郎</h4>
									<p className="text-primary text-sm">神奈川県 △△シニアコミュニティ 代表</p>
								</div>
							</div>

							<p className="text-gray-700">
								「最初は懐疑的だった会員も、実際に体験すると楽しさに驚き、今では固定ファンが多数います。地域の交流イベントとしても定着し、異なる世代間の会話のきっかけにもなっています。」
							</p>
						</div>
					</div>
				</div>

				<div className="bg-background-light rounded-xl p-8">
					<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						メディア掲載実績
					</h3>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
							<p className="text-xl font-bold text-gray-800">○○新聞</p>
						</div>
						<div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
							<p className="text-xl font-bold text-gray-800">△△テレビ</p>
						</div>
						<div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
							<p className="text-xl font-bold text-gray-800">□□雑誌</p>
						</div>
						<div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
							<p className="text-xl font-bold text-gray-800">◇◇ラジオ</p>
						</div>
					</div>
				</div>

				<div className="mt-12 text-center">
					<p className="text-2xl font-bold text-gray-800 mb-6">
						あなたもこの実績ある取り組みに参加してみませんか？
					</p>

					<a
						href="#contact-form"
						className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
					>
						無料体験に申し込む
					</a>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/cv/ContactForm.tsx

// components/cv/ContactForm.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ContactFormInput } from '@/types';

export default function ContactForm() {
	const [formData, setFormData] = useState<ContactFormInput>({
		name: '',
		email: '',
		phone: '',
		preferredDate: '',
		message: ''
	});

	const [formErrors, setFormErrors] = useState<Partial<ContactFormInput>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const validateForm = () => {
		const errors: Partial<ContactFormInput> = {};

		if (!formData.name.trim()) {
			errors.name = 'お名前は必須です';
		}

		if (!formData.email.trim()) {
			errors.email = 'メールアドレスは必須です';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = '正しいメールアドレスを入力してください';
		}

		if (formData.phone && !/^[0-9-+]{10,}$/.test(formData.phone)) {
			errors.phone = '正しい電話番号を入力してください';
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));

		// エラーがある場合はフィールドの変更時にクリア
		if (formErrors[name as keyof ContactFormInput]) {
			setFormErrors(prev => ({
				...prev,
				[name]: undefined
			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);

		// 実際の送信処理をシミュレート（本番では API エンドポイントに POST する）
		try {
			await new Promise(resolve => setTimeout(resolve, 1500)); // 送信遅延をシミュレート
			setSubmitSuccess(true);
			setFormData({ name: '', email: '', phone: '', preferredDate: '', message: '' });
		} catch (error) {
			console.error('送信エラー:', error);
			alert('送信中にエラーが発生しました。時間をおいて再度お試しください。');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact-form" className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						<span className="text-primary">無料体験</span>のお申し込み
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						まずは1回、遊んでみませんか？
					</p>
				</div>

				<div className="bg-white rounded-xl shadow-xl overflow-hidden">
					<div className="md:flex">
						<div className="md:w-1/2 p-8 bg-background-light">
							<h3 className="text-2xl font-bold text-gray-800 mb-6">
								無料体験について
							</h3>

							<div className="space-y-6">
								<div className="flex items-start">
									<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<div className="ml-4">
										<h4 className="text-xl font-semibold text-gray-800">所要時間</h4>
										<p className="text-gray-700">約60分（説明15分・体験30分・質問15分）</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
										</svg>
									</div>
									<div className="ml-4">
										<h4 className="text-xl font-semibold text-gray-800">費用</h4>
										<p className="text-gray-700">無料（ドリンク1杯サービス付き）</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</div>
									<div className="ml-4">
										<h4 className="text-xl font-semibold text-gray-800">持ち物</h4>
										<p className="text-gray-700">特になし（メガネが必要な方はご持参ください）</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<div className="ml-4">
										<h4 className="text-xl font-semibold text-gray-800">場所</h4>
										<p className="text-gray-700">東京都千代田区千代田1-1 千代田ビル3F</p>
									</div>
								</div>
							</div>

							<div className="mt-8 rounded-lg bg-white p-6 border border-primary border-opacity-20">
								<h4 className="text-xl font-semibold text-gray-800 mb-2">予約時のご注意</h4>
								<ul className="space-y-2 text-gray-700">
									<li className="flex items-start">
										<span className="text-primary font-bold mr-2">•</span>
										ご予約は3日前までにお願いします
									</li>
									<li className="flex items-start">
										<span className="text-primary font-bold mr-2">•</span>
										友人・知人と一緒の参加も歓迎です
									</li>
									<li className="flex items-start">
										<span className="text-primary font-bold mr-2">•</span>
										体験後の入会義務はありません
									</li>
								</ul>
							</div>
						</div>

						<div className="md:w-1/2 p-8 bg-primary text-white">
							{submitSuccess ? (
								<div className="h-full flex flex-col items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<h3 className="text-2xl font-bold mb-2">お申し込みありがとうございます</h3>
									<p className="text-lg text-center mb-6">
										ご予約内容を確認し、24時間以内にメールにてご連絡いたします。
									</p>
									<button
										onClick={() => setSubmitSuccess(false)}
										className="bg-white text-primary py-2 px-6 rounded-full font-bold hover:bg-secondary hover:text-white transition-all"
									>
										別の予約をする
									</button>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="text-white">
									<h3 className="text-2xl font-bold mb-6">無料体験予約フォーム</h3>

									<div className="mb-4">
										<label htmlFor="name" className="block text-lg font-medium mb-1">
											お名前 <span className="text-secondary">*</span>
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white border ${formErrors.name ? 'border-secondary' : 'border-white/30'} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white`}
											placeholder="例：山田 太郎"
										/>
										{formErrors.name && (
											<p className="mt-1 text-secondary">{formErrors.name}</p>
										)}
									</div>

									<div className="mb-4">
										<label htmlFor="email" className="block text-lg font-medium mb-1">
											メールアドレス <span className="text-secondary">*</span>
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white border ${formErrors.email ? 'border-secondary' : 'border-white/30'} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white`}
											placeholder="例：example@email.com"
										/>
										{formErrors.email && (
											<p className="mt-1 text-secondary">{formErrors.email}</p>
										)}
									</div>

									<div className="mb-4">
										<label htmlFor="phone" className="block text-lg font-medium mb-1">
											電話番号（任意）
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone || ''}
											onChange={handleChange}
											className={`w-full px-4 py-3 rounded-lg bg-white/10 text-white border ${formErrors.phone ? 'border-secondary' : 'border-white/30'} placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white`}
											placeholder="例：03-1234-5678"
										/>
										{formErrors.phone && (
											<p className="mt-1 text-secondary">{formErrors.phone}</p>
										)}
									</div>

									<div className="mb-4">
										<label htmlFor="preferredDate" className="block text-lg font-medium mb-1">
											ご希望日時（任意）
										</label>
										<input
											type="text"
											id="preferredDate"
											name="preferredDate"
											value={formData.preferredDate || ''}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
											placeholder="例：○月○日 午後希望"
										/>
									</div>

									<div className="mb-6">
										<label htmlFor="message" className="block text-lg font-medium mb-1">
											ご質問など（任意）
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message || ''}
											onChange={handleChange}
											rows={3}
											className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
											placeholder="ご質問やご要望があればお書きください"
										></textarea>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-secondary text-gray-800 py-3 px-6 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
									>
										{isSubmitting ? '送信中...' : '無料体験に申し込む（3分で完了）'}
									</button>

									<p className="mt-4 text-center text-white/80 text-sm">
										※ご入力いただいた情報は、体験予約のご連絡以外には使用いたしません。
									</p>
								</form>
							)}
						</div>
					</div>
				</div>

				<div className="mt-12 text-center">
					<p className="text-lg text-gray-700 mb-6">
						その他のお問い合わせ方法
					</p>

					<div className="flex flex-col md:flex-row justify-center gap-4">
						<Link
							href="tel:0312345678"
							className="flex items-center justify-center bg-white text-primary border border-primary py-3 px-6 rounded-full hover:bg-primary hover:text-white transition-all shadow-md"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							お電話でのお問い合わせ
						</Link>

						<Link
							href="https://lin.ee/yourlineid"
							target="_blank"
							className="flex items-center justify-center bg-white text-primary border border-primary py-3 px-6 rounded-full hover:bg-primary hover:text-white transition-all shadow-md"
						>
							<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
								<path d="M19.365 9.89c.50 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91h-2.681a.91.91 0 01-.906-.91V10.8c0-.5.406-.91.906-.91h3.456zM13.64 14.088a.91.91 0 01.906.91v2.675a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-1.766h-2.45v1.766a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-2.675a.91.91 0 01.906-.91h4.262zm-7.265-4.198a.91.91 0 01.906.91v6.583a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-6.583a.91.91 0 01.906-.91zm13.265-1.073C20.947 8.817 22 9.87 22 11.177v6.839c0 1.308-1.053 2.36-2.36 2.36H4.36C3.053 20.376 2 19.324 2 18.016v-6.839c0-1.308 1.053-2.36 2.36-2.36h15.94z" />
							</svg>
							LINEでのお問い合わせ
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/cv/ResultsSection.tsx

// components/cv/ResultsSection.tsx
import Image from 'next/image';

export default function ResultsSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						<span className="text-primary">2ヶ月で脳年齢が5歳若返り</span><br />
						医師監修のeスポーツ習慣
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						楽しみながら健康効果が得られる、それが私たちの「シニアeスポーツ」です
					</p>
				</div>

				<div className="bg-background rounded-xl overflow-hidden shadow-lg">
					<div className="md:flex">
						<div className="md:w-1/2 bg-background-light p-8">
							<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
								実証されている効果
							</h3>

							<div className="space-y-6">
								<div className="flex items-center">
									<div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
									<div>
										<h4 className="text-xl font-semibold text-gray-800">認知機能の向上</h4>
										<p className="text-lg text-gray-700">
											記憶力・判断力のテストで平均<span className="font-bold">12%のスコア向上</span>
										</p>
									</div>
								</div>

								<div className="flex items-center">
									<div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
										</svg>
									</div>
									<div>
										<h4 className="text-xl font-semibold text-gray-800">反応速度の改善</h4>
										<p className="text-lg text-gray-700">
											8週間の継続で反射神経テストが<span className="font-bold">23%向上</span>
										</p>
									</div>
								</div>

								<div className="flex items-center">
									<div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</div>
									<div>
										<h4 className="text-xl font-semibold text-gray-800">社交性の向上</h4>
										<p className="text-lg text-gray-700">
											普段の会話量が<span className="font-bold">1.8倍</span>に増加、笑顔も増える
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="md:w-1/2 p-8">
							<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
								専門家の声
							</h3>

							<div className="bg-white rounded-lg p-6 shadow-sm">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
										<div className="w-full h-full flex items-center justify-center text-gray-400">
											写真
										</div>
									</div>
									<div>
										<h4 className="text-xl font-bold text-gray-800">田中 明彦 教授</h4>
										<p className="text-primary">脳科学研究所</p>
									</div>
								</div>

								<div className="flex mb-2">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
										<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
									</svg>
								</div>

								<p className="text-lg text-gray-700 mb-4">
									<span className="font-semibold">シニア世代のゲーム活動は単なる娯楽ではなく、脳の活性化に非常に効果的です。</span>
									特に他者と一緒に行うゲームは、複数の認知機能を同時に使うため理想的です。
								</p>

								<p className="text-lg text-gray-700">
									楽しみながら脳を使うという点で、健康維持に最適な活動と言えるでしょう。
								</p>
							</div>

							<div className="mt-6 text-center">
								<a
									href="#contact-form"
									className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
								>
									科学的に効果のある体験をしてみる
								</a>
								<p className="mt-2 text-gray-600">
									※効果には個人差があります
								</p>
							</div>
						</div>
					</div>

					<div className="px-8 py-6 bg-accent bg-opacity-30">
						<h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
							なぜゲームが健康によいのか？
						</h3>
						<p className="text-lg text-gray-700 text-center">
							複数の脳の領域を同時に使うことで、脳の神経回路が活性化し、認知機能の維持・向上に役立ちます。
							特に、判断力・記憶力・反射神経などを同時に使う「デュアルタスク」が効果的とされています。
						</p>
					</div>
				</div>

				<div className="mt-12 bg-white rounded-xl p-8 shadow-md text-center">
					<div className="max-w-3xl mx-auto">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							大切なのは「楽しさ」と「継続」
						</h3>
						<p className="text-xl text-gray-700 mb-8">
							健康のために「やらなければ」ではなく、「楽しいから」続けられる。
							それがシニアeスポーツの最大の魅力です。
						</p>

						<a
							href="#contact-form"
							className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
						>
							まずは無料で体験してみる
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/cv/EmpathySection.tsx

// components/cv/EmpathySection.tsx
import Image from 'next/image';

export default function EmpathySection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-800">
						最近、なんとなく...そんなふうに感じること、ありませんか？
					</h2>
				</div>

				<div className="bg-background rounded-xl p-8 shadow-md">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								人と話す機会が、ぐんと減った気がする
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								一人でスマホやテレビばかり見て、1日が終わってしまう
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								また忘れちゃった...が増えてきた
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								体は元気だけど、どこか張り合いがない
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								出かける理由も、話す相手も、なんとなく減ってきた
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								でも、何をすればいいか分からない
							</p>
						</div>
					</div>

					{/*
										<div className="mt-8 text-center">
						<p className="text-2xl font-bold text-gray-800">
							実はそう感じていたのは、あなただけではありません
						</p>
						<p className="mt-4 text-xl text-gray-700">
							私たちの体験スペースに来られる方の多くが、はじめは『ゲームなんて...』と戸惑っていました。
							でも今では、『毎週ここに来るのが楽しみ』と笑顔で過ごされています。
						</p>
					</div>
					*/}
					<div className="mt-8 text-center">
						<p className="text-2xl font-bold text-gray-800">
							そう感じるのは、あなただけではありません
						</p>
						<p className="mt-4 text-xl text-gray-700">
							来られる方の多くが、はじめは『ゲームなんて...』と、<br/>
							でもそれが毎週の楽しみになります
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/cv/CVTestimonialsSection.tsx

// components/cv/CVTestimonialsSection.tsx
import Image from 'next/image';

export default function CVTestimonialsSection() {
	return (
		<section className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						<span className="text-primary">参加者の声</span>をご紹介
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						こんな方々が実際に参加して、生活が変わりました
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<div className="bg-white rounded-xl overflow-hidden shadow-lg">
						<div className="relative h-64">
							<div className="h-full bg-gray-200 flex items-center justify-center text-gray-400">
								田中さん（68歳）の体験写真
							</div>
						</div>

						<div className="p-6">
							<div className="flex items-center mb-4">
								<div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
									<div className="w-full h-full flex items-center justify-center text-gray-400">
										写真
									</div>
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">田中 幸子さん（68歳）</h3>
									<p className="text-gray-600">週2回・3ヶ月間継続中</p>
								</div>
							</div>

							<p className="text-lg text-gray-700 italic mb-4">
								「孫が『おばあちゃん上手！』って驚いてくれるんです。家族との話題が増えて、こんなに楽しいなんて思いませんでした。何より友達ができたのが嬉しいです」
							</p>

							<div className="bg-background-light rounded-lg p-4">
								<h4 className="text-lg font-semibold text-gray-800 mb-2">参加前と参加後の変化</h4>
								<ul className="space-y-2 text-gray-700">
									<li className="flex items-start">
										<span className="text-red-500 font-bold mr-2">●</span>
										<span className="font-medium">参加前:</span>
										<span className="ml-2">テレビを見るだけの生活、孫と話題がなかった</span>
									</li>
									<li className="flex items-start">
										<span className="text-green-500 font-bold mr-2">●</span>
										<span className="font-medium">参加後:</span>
										<span className="ml-2">孫と共通の話題ができた、新しい友達ができた</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-xl overflow-hidden shadow-lg">
						<div className="relative h-64">
							<div className="h-full bg-gray-200 flex items-center justify-center text-gray-400">
								佐藤さん（72歳）の体験写真
							</div>
						</div>

						<div className="p-6">
							<div className="flex items-center mb-4">
								<div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
									<div className="w-full h-full flex items-center justify-center text-gray-400">
										写真
									</div>
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-800">佐藤 健一さん（72歳）</h3>
									<p className="text-gray-600">週1回・6ヶ月間継続中</p>
								</div>
							</div>

							<p className="text-lg text-gray-700 italic mb-4">
								「最初は『私に出来るかな』と不安でしたが、スタッフが親切に教えてくれたおかげですぐに楽しめました。脳トレだと思って始めましたが、いつの間にか楽しみが増えて生活リズムが整いました」
							</p>

							<div className="bg-background-light rounded-lg p-4">
								<h4 className="text-lg font-semibold text-gray-800 mb-2">参加前と参加後の変化</h4>
								<ul className="space-y-2 text-gray-700">
									<li className="flex items-start">
										<span className="text-red-500 font-bold mr-2">●</span>
										<span className="font-medium">参加前:</span>
										<span className="ml-2">物忘れが増えた気がする、生活リズムが不規則</span>
									</li>
									<li className="flex items-start">
										<span className="text-green-500 font-bold mr-2">●</span>
										<span className="font-medium">参加後:</span>
										<span className="ml-2">記憶力の改善を実感、規則正しい生活習慣に</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-xl p-8 shadow-lg">
					<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						参加者の声（動画）
					</h3>

					<div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-6">
						<div className="flex items-center justify-center h-full text-gray-400">
							参加者インタビュー動画がここに表示されます
						</div>
					</div>

					<div className="text-center">
						<a
							href="#contact-form"
							className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
						>
							あなたも体験してみませんか？
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/cv/CVHeroSection.tsx

// components/cv/CVHeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function CVHeroSection() {
	const imageSrc = "/CVHeroSection.png";
	const imageAlt = "シニアの方々がゲームを楽しむ様子";
	const secondaryCtaText = 'もっと詳しく';
	const secondaryCtaLink = "#experience2";
	return (
		<section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-background to-background-light">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 md:pr-12">
						{/*
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
							<span className="text-primary">60代から始めたゲーム</span>が、<br />
							私の毎日を変えてくれました。
						</h1>
						<p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
							「私にゲームなんて…」と思っていた方々が、今では笑顔で楽しむ姿を見てください。
							シニア世代の新しい楽しみ、認知症予防、そして人との交流がここにあります。
						</p>
						*/}
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
							<span className="text-primary">60代から始めるeスポーツ</span>が、<br />
							毎日を変えてくれます。
						</h1>
						<p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
							「私にゲームなんて…」と思っていた方々でも、笑顔で楽しめます。
							シニア世代の新しい楽しみ、認知症予防、そして人との交流がここにあります。
						</p>
						{/*
												<div className="mt-8 bg-accent rounded-lg p-4 inline-block shadow-md transform rotate-2">
							<p className="text-xl font-bold text-gray-800">
								参加者の平均年齢は65歳。<br />みなさん最初は初心者でした
							</p>
						</div>
						*/}
						<div className="mt-8 bg-accent rounded-lg p-4 inline-block shadow-md transform rotate-2">
							<p className="text-xl font-bold text-gray-800">
								参加者は60歳以上。<br />最初は全員初心者です。
							</p>
						</div>

						<div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex">
							<a
								href="#contact"
								className="block w-full md:w-auto text-center bg-secondary text-gray-800 py-4 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
							>
								無料体験に申し込む（3分で完了）
							</a>
							{/*
														<Link
								href="https://lin.ee/yourlineid"
								target="_blank"
								className="block w-full md:w-auto text-center bg-white text-primary border-2 border-primary py-4 px-8 rounded-full text-xl font-medium hover:bg-primary hover:text-white transition-all"
							>
								LINEで質問する
							</Link>							
							*/}
							{secondaryCtaText && (
								<Link
									href={secondaryCtaLink}
									className="block w-full md:w-auto text-center bg-white text-primary border-2 border-primary py-4 px-8 rounded-full text-xl font-medium hover:bg-primary hover:text-white transition-all"
								>
									{secondaryCtaText}
								</Link>
							)}
						</div>
					</div>

					<div className="mt-12 md:mt-0 md:w-1/2 relative">
						<div className="relative rounded-xl overflow-hidden shadow-xl">
							<div className="w-full h-[400px] bg-gray-200 relative">
								<Image
									src={imageSrc}
									alt={imageAlt}
									fill
									style={{ objectFit: 'cover' }}
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						</div>

						<div className="absolute -bottom-6 -right-6 bg-background-light rounded-full p-4 shadow-lg">
							<p className="text-xl font-bold text-primary">
								はじめてでも<br />楽しめる！
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/cv/HopeSection.tsx

// components/cv/HopeSection.tsx
import Image from 'next/image';

export default function HopeSection() {
	const imageSrc = "/HopeSection.png";
	const imageAlt = "シニアの方々がゲームを楽しむ様子";
	return (
		<section className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="text-center mb-12">
					{/*
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						ある日、試してみた<span className="text-primary">"eスポーツ"</span>。<br />
						そこから毎日が変わった。
					</h2>
					*/}
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						ある日、試してみた<span className="text-primary">"eスポーツ"</span>。<br />
						そこから毎日が変わる。
					</h2>
				</div>
				<div className="md:flex items-center md:space-x-8">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<div className="bg-white rounded-xl overflow-hidden shadow-lg">
							{/* 仮の画像プレースホルダー */}
							<div className="aspect-w-1 aspect-h-1 bg-gray-200">
								<Image
									src={imageSrc}
									alt={imageAlt}
									fill
									style={{ objectFit: 'cover' }}
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						</div>
					</div>

					<div className="md:w-1/2">
						{/*
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							ただ遊ぶだけなのに、なんだか元気になってる
						</h3>
						*/}
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							遊ぶだけなのに、元気になる
						</h3>

						<div className="space-y-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 w-8 h-8 bg-background-light rounded-full flex items-center justify-center text-primary font-bold mr-3">
									1
								</div>
								<div>
									<h4 className="text-xl font-semibold text-gray-800">簡単</h4>
									<p className="text-lg text-gray-700">
										操作は2つのボタンだけ。まるで昔のボードゲームのような、誰でも楽しめるシンプルさ。
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 w-8 h-8 bg-background-light rounded-full flex items-center justify-center text-primary font-bold mr-3">
									2
								</div>
								<div>
									<h4 className="text-xl font-semibold text-gray-800">健康的</h4>
									<p className="text-lg text-gray-700">
										注意力・判断力・記憶力が自然と刺激され、「気づいたら脳がスッキリ」という効果。
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 w-8 h-8 bg-background-light rounded-full flex items-center justify-center text-primary font-bold mr-3">
									3
								</div>
								<div>
									<h4 className="text-xl font-semibold text-gray-800">社会的</h4>
									<p className="text-lg text-gray-700">
										協力プレイで初対面の人とも自然と会話が生まれ、「また一緒にやりましょうね」と距離が縮まる。
									</p>
								</div>
							</div>
						</div>

						<div className="mt-6 text-center">
							<p className="text-xl font-bold text-gray-800">
								ゲームって子どもだけのものだと思ってた。<br/>でも実際は、健康のきっかけ、人と笑い合える場所だったんです。
							</p>
						</div>

						<div className="mt-8 text-center">
							<a
								href="#contact-form"
								className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
							>
								私も体験してみる
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/Footer.tsx

// components/Footer.tsx
import Link from 'next/link';
export default function Footer() {
	return (
		<footer className="bg-primary text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* ロゴと概要 */}
					<div className="md:col-span-2">
						<h2 className="text-2xl font-bold mb-4">シニア<span className="text-secondary">e</span>スポーツ体験</h2>
						<p className="text-lg mb-4">
							笑って、遊んで、ちょっと若返る。<br />
							60歳からの新しい楽しみ・出会い・健康づくり。
						</p>
					</div>

					{/* リンク1 */}
					<div>
						<h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">サービス</h3>
						<ul className="space-y-2 text-lg">
							<li>
								<Link href="#experience" className="hover:text-secondary transition-colors">
									体験内容
								</Link>
							</li>
							{/*<li>
								<Link href="#pricing" className="hover:text-secondary transition-colors">
									料金・時間
								</Link>
							</li>*/}
							<li>
								<Link href="#contact" className="hover:text-secondary transition-colors">
									無料体験予約
								</Link>
							</li>
							<li>
								<Link href="#access" className="hover:text-secondary transition-colors">
									アクセス
								</Link>
							</li>
						</ul>
					</div>

					{/* リンク2 */}
					<div>
						<h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">お問い合わせ</h3>
						<ul className="space-y-2 text-lg">
							<li className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								<Link href="tel:0312345678" className="hover:text-secondary transition-colors">
									090-8364-7759
								</Link>
							</li>
							<li className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<Link href="mailto:info@marugoto-works.com" className="hover:text-secondary transition-colors">
									info@marugoto-works.com
								</Link>
							</li>
							<p className="text-lg">
								〒150-0002<br />
								東京都渋谷区渋谷2-19-15<br />
								宮益坂ビルディング609
							</p>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-white/30 text-center">
					{/*
									<p className="text-lg">
						営業時間：平日 10:00〜19:00 / 土日 10:00〜18:00（水曜・祝日定休）
					</p>
				*/}

					<div className="mt-2 flex flex-wrap justify-center gap-6">
						<Link href="/privacy-policy" className="text-lg hover:text-secondary transition-colors">
							プライバシーポリシー
						</Link>
						<Link href="/terms" className="text-lg hover:text-secondary transition-colors">
							利用規約
						</Link>
						{/*
						<Link href="/company" className="text-lg hover:text-secondary transition-colors">
							運営会社
						</Link>
						*/}
					</div>

					<p className="mt-6 text-lg">
						&copy; {new Date().getFullYear()} シニアeスポーツ体験スペース All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}-e 
### FILE: ./components/VenueAtmosphere.tsx

// components/VenueAtmosphere.tsx
import Image from 'next/image';

export default function VenueAtmosphere() {
	const imageSrc = "/VenueAtmosphere.png";
	const imageAlt = "シニアの方々がゲームを楽しむ様子";
	const imageSrc2 = "/Instructor.png";
	const imageAlt2 = "ゲームインストラクター";
	return (
		<section id="venue" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						快適で<span className="text-primary">清潔な会議室</span>をご用意しています。
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">安心して楽しめる、居心地の良い空間です</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<div className="rounded-xl overflow-hidden shadow-lg">
						<div className="aspect-w-16 aspect-h-9 bg-gray-200">
							<Image
								src={imageSrc}
								alt={imageAlt}
								fill
								style={{ objectFit: 'cover' }}
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</div>

					<div className="flex flex-col justify-center">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							明るく清潔感のあるプレイエリア
						</h3>
						<p className="text-lg text-gray-700 mb-6">
							白壁を基調とした明るい空間で、イベント会場に最適です。
							立川駅から徒歩5分、プロジェクターでゲームを体験します！
						</p>
					</div>
				</div>

				<div className="bg-background rounded-xl p-8 shadow-md">
					<div className="md:flex items-center">
						<div className="md:w-2/3 md:pr-8">
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								スタッフが丁寧にサポート
							</h3>
							<p className="text-lg text-gray-700 mb-6">
								皆さまの体験を楽しくサポートします。
								操作方法に不安がある方も、一つひとつ丁寧にご説明いたしますので安心してご参加ください。
							</p>

							<div className="flex flex-wrap gap-4">
								<div className="flex items-center bg-white rounded-full py-2 px-4">
									<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</div>
									<span className="text-gray-800 font-medium">ゲームインストラクター</span>
								</div>

								<div className="flex items-center bg-white rounded-full py-2 px-4">
									<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
										</svg>
									</div>
									<span className="text-gray-800 font-medium">安心の見守り</span>
								</div>

								<div className="flex items-center bg-white rounded-full py-2 px-4">
									<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									</div>
									<span className="text-gray-800 font-medium">親身な対応</span>
								</div>
							</div>
						</div>

						<div className="mt-6 md:mt-0 md:w-1/3">
							<div className="rounded-xl overflow-hidden shadow-md">
								<div className="aspect-w-1 aspect-h-1 bg-gray-200">
									<Image
										src={imageSrc2}
										alt={imageAlt2}
										fill
										style={{ objectFit: 'cover' }}
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 text-center">
					<h3 className="text-2xl font-bold text-gray-800 mb-4">
						安心してご来場ください
					</h3>
					<div className="bg-accent inline-block rounded-lg py-3 px-6 shadow-md">
						<p className="text-xl font-bold text-gray-800">
							まずは見学だけでもOKです。どうぞお気軽にのぞいてみてください。
							皆さまのお越しを心よりお待ちしております。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/Header.tsx

// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
	{ label: 'ホーム', href: '/' },
	{ label: '体験内容', href: '#experience' },
	//{ label: '料金・時間', href: '#pricing' },
	//{ label: 'よくある質問', href: '#faq' },
	{ label: 'お問い合わせ', href: '#contact' },
	{ label: '無料体験予約', href: '#contact', isButton: true },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	// スクロールに応じてヘッダーを表示/非表示
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			setVisible(
				(prevScrollPos > currentScrollPos) ||
				currentScrollPos < 10 ||
				isOpen
			);

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, isOpen]);

	return (
		<header
			className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${visible ? 'translate-y-0' : '-translate-y-full'
				}`}
		>
			<div className="container mx-auto px-4 py-3 md:py-4">
				<div className="flex justify-between items-center">
					{/* ロゴ */}
					<Link href="/" className="flex items-center">
						<span className="text-2xl font-bold text-primary">シニア<span className="text-secondary">e</span>スポーツ体験</span>
					</Link>

					{/* デスクトップナビゲーション */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item) =>
							item.isButton ? (
								<Link
									key={item.href}
									href={item.href}
									className="bg-secondary text-gray-800 py-2 px-6 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
								>
									{item.label}
								</Link>
							) : (
								<Link
									key={item.href}
									href={item.href}
									className="text-lg font-medium text-gray-800 hover:text-primary"
								>
									{item.label}
								</Link>
							)
						)}
					</nav>

					{/* モバイルメニューボタン */}
					<button
						className="md:hidden text-gray-800 focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
					>
						{isOpen ? (
							<X className="h-8 w-8" />
						) : (
							<Menu className="h-8 w-8" />
						)}
					</button>
				</div>

				{/* モバイルナビゲーション */}
				{isOpen && (
					<div className="md:hidden pt-4 pb-2">
						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={`text-xl font-medium py-2 ${item.isButton
											? "bg-secondary text-gray-800 py-3 px-6 rounded-full text-center font-bold hover:bg-opacity-90 transition-all shadow-md"
											: "text-gray-800 hover:text-primary"
										}`}
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</Link>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}-e 
### FILE: ./components/ContactCTA.tsx

// components/ContactCTA.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ContactFormInput } from '@/types';
// 注: types.tsに以下を追加する必要があります
// interface ContactFormInput {
//   name: string;
//   email: string;
//   message?: string;
//   participants: string;
//   preferredDate?: string;
// }

export default function ContactCTA() {
	const [formData, setFormData] = useState<ContactFormInput>({
		name: '',
		email: '',
		message: '',
		participants: '1',
	});

	const [formErrors, setFormErrors] = useState<Partial<ContactFormInput>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const validateForm = () => {
		const errors: Partial<ContactFormInput> = {};

		if (!formData.name.trim()) {
			errors.name = 'お名前は必須です';
		}

		if (!formData.email.trim()) {
			errors.email = 'メールアドレスは必須です';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = '正しいメールアドレスを入力してください';
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);

		// ここに実際のフォーム送信処理を追加
		// 仮の非同期処理（本番では実際のAPIエンドポイントにPOSTする）
		try {
			await new Promise(resolve => setTimeout(resolve, 1000));
			setSubmitSuccess(true);
			setFormData({ name: '', email: '', message: '', participants: '1', preferredDate: '' });
		} catch (error) {
			console.error('送信エラー:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						まずは<span className="text-primary">体験</span>してみませんか？
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						初めての方も安心して楽しめる環境を整えています
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="bg-background-light rounded-xl overflow-hidden shadow-lg">
						<div className="md:flex">
							<div className="md:w-1/2 p-8">
								<h3 className="text-2xl font-bold text-gray-800 mb-4">
									無料体験のご予約
								</h3>

								<p className="text-lg text-gray-700 mb-6">
									まずは気軽に体験してみてください。スタッフが丁寧にサポートします。
									友達と一緒に参加するとさらに楽しめます！
								</p>

								<div className="space-y-4">
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">所要時間</h4>
											<p className="text-gray-700">約120分（説明:15分・体験:45分・観覧/自由時間:60分）</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">費用</h4>
											<p className="text-gray-700">無料</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">持ち物</h4>
											<p className="text-gray-700">特になし（メガネが必要な方はご持参ください）</p>
										</div>
									</div>
								</div>
							</div>

							<div className="md:w-1/2 bg-primary p-8">
								{submitSuccess ? (
									<div className="h-full flex flex-col items-center justify-center text-white">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<h3 className="text-2xl font-bold mb-2">お申し込みありがとうございます</h3>
										<p className="text-lg text-center mb-6">
											ご予約内容を確認し、24時間以内にメールにてご連絡いたします。
										</p>
										<button
											onClick={() => setSubmitSuccess(false)}
											className="bg-white text-primary py-2 px-6 rounded-full font-bold hover:bg-secondary hover:text-white transition-all"
										>
											別の予約をする
										</button>
									</div>
								) : (
									<form onSubmit={handleSubmit} className="text-white">
										<h3 className="text-2xl font-bold mb-6">無料体験予約フォーム</h3>

										<div className="mb-4">
											<label htmlFor="name" className="block text-lg font-medium mb-1">
												お名前 <span className="text-secondary">*</span>
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="例：山田 太郎"
											/>
											{formErrors.name && (
												<p className="mt-1 text-secondary">{formErrors.name}</p>
											)}
										</div>

										<div className="mb-4">
											<label htmlFor="email" className="block text-lg font-medium mb-1">
												メールアドレス <span className="text-secondary">*</span>
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="例：example@email.com"
											/>
											{formErrors.email && (
												<p className="mt-1 text-secondary">{formErrors.email}</p>
											)}
										</div>

										<div className="mb-4">
											<label htmlFor="participants" className="block text-lg font-medium mb-1">
												参加人数 <span className="text-secondary">*</span>
											</label>
											<select
												id="participants"
												name="participants"
												value={formData.participants}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white [&>option]:text-black"
											>
												<option value="1">1名</option>
												<option value="2">2名</option>
												<option value="3">3名</option>
												<option value="4">4名</option>
												<option value="5">5名以上（詳細は備考欄に）</option>
											</select>
										</div>

										<div className="mb-6">
											<label htmlFor="message" className="block text-lg font-medium mb-1">
												ご質問など（任意）
											</label>
											<textarea
												id="message"
												name="message"
												value={formData.message || ''}
												onChange={handleChange}
												rows={3}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="ご質問やご要望があればお書きください"
											></textarea>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-secondary text-gray-800 py-3 px-6 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
										>
											{isSubmitting ? '送信中...' : '予約内容を送信する'}
										</button>

										<p className="mt-4 text-center text-white/80 text-sm">
											※ご入力いただいた情報は、体験予約のご連絡以外には使用いたしません。
										</p>
									</form>
								)}
							</div>
						</div>
					</div>

					<div className="mt-16">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							アクセス情報
						</h3>

						<div className="md:flex shadow-lg rounded-xl overflow-hidden">
							<div className="md:w-1/2 p-8 bg-background">
								<h4 className="text-xl font-semibold text-gray-800 mb-4">シニアeスポーツ体験スペース</h4>

								<div className="space-y-3 text-lg">
									<p className="flex items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										〒100-0001<br />
										東京都千代田区千代田1-1<br />
										千代田ビル3F
									</p>

									<p className="flex items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
										03-1234-5678
									</p>

									<p className="flex items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										info@senior-esports.example.com
									</p>
								</div>

								<div className="mt-6">
									<h5 className="text-lg font-semibold text-gray-800 mb-2">交通アクセス</h5>
									<ul className="space-y-2 text-lg text-gray-700">
										<li>• 東京メトロ丸ノ内線「東京駅」より徒歩5分</li>
										<li>• JR「東京駅」八重洲口より徒歩7分</li>
										<li>• 都営バス「千代田一丁目」停留所より徒歩1分</li>
									</ul>
								</div>

								<div className="mt-6 flex justify-center">
									<Link
										href="https://lin.ee/yourlineid"
										target="_blank"
										className="flex items-center bg-white text-primary py-3 px-6 rounded-full hover:bg-secondary hover:text-white transition-all shadow-md"
									>
										<svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
											<path d="M19.365 9.89c.50 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91h-2.681a.91.91 0 01-.906-.91V10.8c0-.5.406-.91.906-.91h3.456zM13.64 14.088a.91.91 0 01.906.91v2.675a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-1.766h-2.45v1.766a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-2.675a.91.91 0 01.906-.91h4.262zm-7.265-4.198a.91.91 0 01.906.91v6.583a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-6.583a.91.91 0 01.906-.91zm13.265-1.073C20.947 8.817 22 9.87 22 11.177v6.839c0 1.308-1.053 2.36-2.36 2.36H4.36C3.053 20.376 2 19.324 2 18.016v-6.839c0-1.308 1.053-2.36 2.36-2.36h15.94z" />
										</svg>
										LINEでお問い合わせ
									</Link>
								</div>
							</div>

							<div className="md:w-1/2">
								<div className="bg-gray-200 h-full min-h-[300px] flex items-center justify-center">
									<p className="text-gray-500 text-lg">ここに地図が表示されます</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-16 text-center">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							新しい楽しみを見つけませんか？
						</h3>
						<p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
							みなさまのお越しを心よりお待ちしております。<br />
							一緒に笑って、遊んで、新しい体験を楽しみましょう！
						</p>

						<Link
							href="/cv"
							className="inline-block bg-secondary text-gray-800 py-4 px-10 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
						>
							無料体験に申し込む
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/ExpertRecommendation.tsx

"use client";
// components/ExpertRecommendation.tsx
import Image from 'next/image';
import { Expert } from '@/types';
import { useState } from 'react';
import ReferenceModal from './ReferenceModal';
// サンプルデータ
const experts: Expert[] = [
	{
		id: '1',
		name: '田中 明彦',
		title: '脳科学研究所 教授',
		image: '/expert-1.png', // 実際の画像パスに変更してください
		quote: 'シニア世代のゲーム活動は単なる娯楽ではなく、脳の活性化に効果的だといわれます。特に他者と一緒に行うゲームは、複数の認知機能を同時に使うため理想的だと考えられます。楽しみながら脳を使うという点で、健康維持に最適な活動と言えるでしょう。'
	},
	{
		id: '2',
		name: '鈴木 健太郎',
		title: '老年医学専門医',
		image: '/expert-2.png',
		quote: '高齢者の健康維持には、身体的な運動だけでなく、脳の運動も不可欠です。日々新しいことに挑戦し、複数の認知機能を同時に使うことが理想的です。eスポーツのような活動は、反射神経や判断力、記憶力を同時に使うため効果的です。また、他者との交流があることで、うつや孤独感の予防にもつながります。'
	}
];
const references = [
	'[1] Greg L. West, Benjamin Rich Zendel, Kyoko Konishi, Jessica Benady-Chorney, Veronique D. Bohbot, Isabelle Peretz, Sylvie Belleville, “Playing Super Mario 64 increases hippocampal grey matter in older adults”, PLoS One. 2017 Dec 6;12(12):e0187779.',
	'[2] JA Anguera, J Boccanfuso, JL Rintoul, O Al-Hashimi, F Faraji, J Janowich, E Kong, Y Larraburo, C Rolle, E Johnston, A Gazzaley, “Video game training enhances cognitive control in older adults”, Nature. 2013 Sep 5;501(7465):97–101. doi: 10.1038/nature12486',
	'[3] Saara Kukkohovi, Heidi Siira, Sari Arolaakso, Jouko Miettunen, Satu Elo, "The effectiveness of digital gaming on the functioning and activity of older people living in long-term care facilities: a systematic review and meta-analysis", Aging Clin Exp Res. 2023 Jun 20;35(8):1595–1608.',
	'[4] Moritz Bergmann, Ines Wollbrandt, Lisa Gittel, Eva Halbe, Sarah Mackert, Alexandra Philipsen, Silke Lux, “Effects of a video game intervention on symptoms, training motivation, and visuo-spatial memory in depression”, ORIGINAL RESEARCH article, Front. Psychiatry , 24 August 2023'
];

export default function ExpertRecommendation() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<ReferenceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} references={references} />
			<section id="expert" className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-10">
						<div className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
							科学的に実証された効果
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
							毎日の<span className="text-primary">「脳活」</span>で健康寿命を延ばす
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
						</h2>
						<p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
							ゲームは単なる娯楽ではありません。世界中の研究で、認知機能の維持・向上に役立つことが証明されています。
						</p>
					</div>

					{/*
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m7-10">
						{experts.map((expert, index) => (
							<div key={expert.id} className="bg-background rounded-xl overflow-hidden shadow-md">
								<div className="md:flex h-full">
									<div className="md:w-1/3 p-6 flex items-center justify-center bg-background-light h-full">
										<div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 relative">
											<Image
												src={expert.image}
												alt={`専門家${index}の発言`}
												fill
												style={{ objectFit: 'cover' }}
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										</div>
									</div>
									
									<h3 className="text-xl font-bold text-gray-800 text-center">{expert.name}</h3>
									<p className="text-primary font-medium text-center">{expert.title}</p>
							
									<div className="md:w-2/3 p-6 flex flex-col justify-center">
										<div className="flex mb-4">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
												<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
											</svg>
										</div>
										<p className="text-lg text-gray-700">
											{expert.quote}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
					*/}
					<div className="bg-background-light rounded-xl p-8 shadow-md">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							研究で実証された効果
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-white rounded-lg p-6 shadow-sm flex flex-col">
								<div className="flex justify-center mb-4">
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
								</div>
								<h4 className="text-xl font-bold text-gray-800 mb-2 text-center">認知機能の向上</h4>
								<ul className="space-y-3 flex-grow">
									<li className="flex items-start">
										<span className="inline-block w-5 h-5 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mr-2 mt-1">1</span>
										<span className="text-gray-700">6ヶ月間のゲーム活動により、認知機能や短期記憶テストのスコアが有意に向上</span>
									</li>
									<li className="flex items-start">
										<span className="inline-block w-5 h-5 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mr-2 mt-1">2</span>
										<span className="text-gray-700">4週間の高強度ゲーム活動で20代と同様のマルチタスク能力を獲得、6か月後も効果が持続</span>
									</li>
								</ul>
								<p className="text-right text-sm text-gray-500 mt-4">研究[1][2]より</p>
							</div>

							<div className="bg-white rounded-lg p-6 shadow-sm flex flex-col">
								<div className="flex justify-center mb-4">
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</div>
								</div>
								<h4 className="text-xl font-bold text-gray-800 mb-2 text-center">社会性の向上</h4>
								<div className="flex-grow">
									<p className="text-gray-700">
										"社会的交流は報告された主な利点のひとつであり・・・グループ形式のゲームは、発話の増加や、笑い・笑顔などの喜びの表現の増加と関連していた。"
									</p>
								</div>
								<p className="text-right text-sm text-gray-500 mt-4">研究[3]より</p>
							</div>

							<div className="bg-white rounded-lg p-6 shadow-sm flex flex-col">
								<div className="flex justify-center mb-4">
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
								</div>
								<h4 className="text-xl font-bold text-gray-800 mb-2 text-center">精神的健康</h4>
								<div className="flex-grow">
									<p className="text-gray-700">
										治療期間6週間でうつ症状スコアが大幅に改善、リハビリテーションソフトや標準治療より高い効果
									</p>
								</div>
								<p className="text-right text-sm text-gray-500 mt-4">研究[4]より</p>
							</div>
						</div>
						<div className="mt-8 text-center">
							<button
								onClick={() => setIsModalOpen(true)}
								className="inline-flex items-center text-primary font-medium hover:text-secondary transition border border-primary hover:border-secondary rounded-full px-4 py-2 text-sm"
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
								参考文献を見る [1][2][3][4]
							</button>
						</div>
					</div>


					<div className="px-8 py-10 mt-5 bg-opacity-30">
						<div className="max-w-3xl mx-auto">
							<div className="flex items-center justify-center mb-4">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<h3 className="text-2xl font-bold text-gray-800">
									なぜゲームが健康によいのか？
								</h3>
							</div>

							<div className="relative mt-8 mb-0">
								<div className="flex items-start">
									{/* 脳みそキャラクター画像 */}
									<div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 -mt-6">
										<img
											src="/brain-character.png"
											alt="脳みそキャラクター"
											className="w-full h-full object-contain"
										/>
									</div>
									<div className="flex-grow bg-white rounded-xl p-6 ml-3 shadow-md relative">
										<div className="absolute left-0 top-8 w-4 h-4 bg-white transform rotate-45 -translate-x-2"></div>
										<p className="text-lg leading-relaxed text-gray-700">
											複数の脳の領域を同時に使うことで、脳の神経回路が活性化し、認知機能の維持・向上に役立ちます。
											特に、<span className="font-bold">判断力・記憶力・反射神経などを同時に使う「デュアルタスク」</span>が効果的とされています！
										</p>
									</div>
								</div>
							</div>

							<div className="bg-white bg-opacity-60 p-6 rounded-lg">
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
									<div className="border border-gray-300 p-3 rounded-lg text-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<p className="font-bold text-gray-800">反射神経</p>
									</div>
									<div className="border border-gray-300 p-3 rounded-lg text-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
										<p className="font-bold text-gray-800">判断力</p>
									</div>
									<div className="border border-gray-300 p-3 rounded-lg text-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
										</svg>
										<p className="font-bold text-gray-800">記憶力</p>
									</div>
									<div className="border border-gray-300 p-3 rounded-lg text-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
										<p className="font-bold text-gray-800">社会性</p>
									</div>
								</div>
							</div>
						</div>
					</div>


					<div className="mt-0 bg-white rounded-xl p-8 shadow-lg text-center relative overflow-hidden">
						<div className="relative z-10 max-w-3xl mx-auto">
							<div className="inline-block bg-secondary text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
								POINT
							</div>
							<h3 className="text-3xl font-bold text-gray-800 mb-4">
								大切なのは「楽しさ」と「継続」
							</h3>
							<p className="text-xl text-gray-700 mb-8">
								健康のために「楽しいから」続けられる。
								それがeスポーツの最大の魅力です。
							</p>
							<div className="inline-block bg-primary text-white py-3 px-8 rounded-full font-bold text-lg shadow-md hover:bg-opacity-90 transition-colors cursor-pointer">
								まずは無料体験に参加する
							</div>
						</div>
						{/* 装飾的な背景要素 */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full opacity-10 -mr-10 -mt-10"></div>
						<div className="absolute bottom-0 left-0 w-24 h-24 bg-primary rounded-full opacity-10 -ml-10 -mb-10"></div>
					</div>
					{/* 
							<div className="mt-12 text-center">
					<a href="/cv" className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
						科学的に効果のある体験をしてみる
					</a>
					<p className="mt-4 text-lg text-gray-600">
						※効果には個人差があります
					</p>
				</div>
				*/}
				</div>
			</section>
		</>
	);
}-e 
### FILE: ./components/ExperienceSection.tsx

// components/ExperienceSection.tsx
import Image from 'next/image';

export default function ExperienceSection() {
	const imageSrc = "/ExperienceSection.png";
	const imageAlt = "シニアの方々がゲームを楽しむ様子";
	return (
		<section id="experience" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						無料体験会って<span className="text-primary">何するの？</span>
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">はじめての方でも安心！無料体験会で体験できること</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* 体験項目1 */}
					<div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex justify-center mb-4">
							<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
								1
							</div>
						</div>
						<h3 className="text-2xl font-bold text-center text-gray-800 mb-3">シンプルなゲーム体験</h3>
						<p className="text-lg text-gray-700">
							簡単操作。初めてでも笑顔になれるゲームをご用意しています。
						</p>
					</div>

					{/* 体験項目2 */}
					<div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex justify-center mb-4">
							<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
								2
							</div>
						</div>
						<h3 className="text-2xl font-bold text-center text-gray-800 mb-3">スタッフのサポート</h3>
						<p className="text-lg text-gray-700">
							スタッフが一人ひとりの進み具合に合わせてサポートします。
						</p>
					</div>
					<div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex justify-center mb-4">
							<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
								3
							</div>
						</div>
						<h3 className="text-2xl font-bold text-center text-gray-800 mb-3">チーム戦</h3>
						<p className="text-lg text-gray-700">
							お一人参加でもご安心を。初対面でも協力ゲームでワイワイつながれます。
						</p>
					</div>
					<div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex justify-center mb-4">
							<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
								4
							</div>
						</div>
						<h3 className="text-2xl font-bold text-center text-gray-800 mb-3">交流タイム（希望者）</h3>
						<p className="text-lg text-gray-700">
							ゲームを遊んだ仲間と情報を交換しましょう！見学だけでもOKです。
						</p>
					</div>
				</div>

				<div className="mt-16 relative">
					<div className="bg-background-light rounded-xl p-8 md:p-12">
						<div className="md:flex items-center">
							<div className="md:w-1/2 md:pr-8">
								{/*	<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
									実際の体験会の様子
								</h3> */}
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
									体験会の雰囲気
								</h3>
								{/*
								<p className="text-lg text-gray-700 mb-6">
									みなさん最初は「私にできるかな？」と不安そうですが、
									すぐに笑顔になって楽しんでいます。年齢や経験は関係ありません。
									一緒に新しい体験を楽しみましょう！
								</p>*/}
								<p className="text-lg text-gray-700 mb-6">
									みなさん最初は「私にできるかな？」と不安かもしれませんが、
									すぐに笑顔になって楽しめます！年齢や経験は関係ありません。
									一緒に新しい体験を楽しみましょう！
								</p>
								<ul className="space-y-3 text-lg text-gray-700">
									<li className="flex items-start">
										<span className="text-primary font-bold mr-2">✓</span>
										初めての方でも30分で楽しめるようになります
									</li>
									<li className="flex items-start">
										<span className="text-primary font-bold mr-2">✓</span>
										笑いが絶えない和やかな雰囲気です
									</li>
									<li className="flex items-start">
										<span className="text-primary font-bold mr-2">✓</span>
										一人でも、お友達と一緒でも大歓迎です
									</li>
								</ul>
							</div>

							<div className="mt-8 md:mt-0 md:w-1/2">
								<div className="relative rounded-xl overflow-hidden shadow-lg">
									<div className="aspect-w-16 aspect-h-9 bg-gray-200">
										<Image
											src={imageSrc}
											alt={imageAlt}
											fill
											style={{ objectFit: 'cover' }}
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="absolute -bottom-5 -right-5 bg-secondary rounded-full p-4 shadow-lg hidden md:block">
						<p className="text-xl font-bold text-gray-800 transform rotate-6">
							みんなで<br />楽しい！
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/Testimonials.tsx

// components/Testimonials.tsx
import Image from 'next/image';
import { Testimonial } from '@/types';

// サンプルデータ
const testimonials: Testimonial[] = [
	{
		id: '1',
		name: '田中 幸子',
		age: 68,
		location: '東京都',
		image: '/images/testimonial-1.jpg', // 実際の画像パスに変更してください
		quote: '孫が『おばあちゃん上手！』って驚いてくれるんです。家族との話題が増えて、こんなに楽しいなんて思いませんでした。何より友達ができたのが嬉しいです。',
		benefits: ['孫との会話増加', '新しい交友関係', '記憶力向上'],
		highlight: '週2回・3ヶ月間継続中',
		rating: 5
	},
	{
		id: '2',
		name: '佐藤 健一',
		age: 72,
		location: '神奈川県',
		image: '/images/testimonial-2.jpg', // 実際の画像パスに変更してください
		quote: '最初は『私に出来るかな』と不安でしたが、スタッフが親切に教えてくれたおかげですぐに楽しめました。脳トレだと思って始めましたが、いつの間にか楽しみが増えて生活リズムが整いました。',
		benefits: ['生活リズム改善', '外出機会増加', '指先の器用さ向上'],
		highlight: '週1回・6ヶ月間継続中',
		rating: 5
	},
	{
		id: '3',
		name: '鈴木 美代子',
		age: 65,
		location: '埼玉県',
		image: '/images/testimonial-3.jpg', // 実際の画像パスに変更してください
		quote: '一人暮らしで話す相手が少なかったのですが、ここに来るようになってから毎週楽しみができました。みんなで一緒にゲームをするとあっという間に時間が過ぎていきます。',
		benefits: ['笑う機会の増加', '認知機能の維持', '新しい趣味の発見'],
		highlight: '週1回・4ヶ月間継続中',
		rating: 4
	}
];

// 星評価を表示するコンポーネント
const StarRating = ({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) => {
	return (
		<div className="flex text-secondary">
			{[...Array(5)].map((_, i) => (
				<svg
					key={i}
					className={`h-5 w-5 ${i < rating ? 'text-secondary' : 'text-gray-300'}`}
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
			))}
		</div>
	);
};

export default function Testimonials() {
	return (
		<section id="testimonials" className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						<span className="text-primary">参加者の声</span>をご紹介
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						孫と遊べるようになった！新しい友達もできた！
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
							<div className="p-6">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
										{/* 画像がある場合はImageコンポーネントを使用 */}
										<div className="w-full h-full flex items-center justify-center text-gray-400">
											写真
										</div>
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-800">{testimonial.name}さん</h3>
										<p className="text-gray-600">{testimonial.age}歳・{testimonial.location}</p>
									</div>
								</div>

								<div className="mb-4">
									<StarRating rating={testimonial.rating} />

									<p className="mt-2 text-lg text-gray-700 italic">
										「{testimonial.quote}」
									</p>
								</div>

								<div className="bg-background-light rounded-lg p-4">
									<h4 className="text-lg font-semibold text-gray-800 mb-2">参加してよかったこと</h4>
									<div className="flex flex-wrap gap-2">
										{testimonial.benefits.map((benefit, index) => (
											<span key={index} className="inline-block bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
												{benefit}
											</span>
										))}
									</div>
								</div>
							</div>

							<div className="p-4 bg-primary bg-opacity-10">
								<div className="flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<p className="text-primary font-medium">
										{testimonial.highlight}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
					<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						あなたも新しい楽しみを見つけませんか？
					</h3>
					<p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
						年齢や経験に関係なく、誰でも楽しめる場所です。<br />
						まずは気軽に体験してみてください。
					</p>
					<div className="text-center">
						<a
							href="/cv"
							className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
						>
							無料体験に申し込む
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/PricingInfo.tsx

// components/PricingInfo.tsx
import Image from 'next/image';
import Link from 'next/link';
import { PricingPlan } from '@/types';

// サンプルデータ
const pricingPlans: PricingPlan[] = [
	{ persons: 1, pricePerPerson: 1200 },
	{ persons: 2, pricePerPerson: 600 },
	{ persons: 3, pricePerPerson: 400 },
	{ persons: 4, pricePerPerson: 300, benefits: ['最もお得なプラン', 'おやつ1品サービス'] }
];

export default function PricingInfo() {
	return (
		<section id="pricing" className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						ご利用<span className="text-primary">案内</span>
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						シンプルでわかりやすい料金体系です
					</p>
				</div>

				<div className="md:flex md:space-x-8 mb-16">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
							<div className="bg-primary py-4">
								<h3 className="text-2xl font-bold text-white text-center">営業時間</h3>
							</div>

							<div className="p-6">
								<table className="w-full text-lg">
									<tbody>
										<tr className="border-b border-gray-200">
											<td className="py-4 font-medium text-gray-800">平日</td>
											<td className="py-4 text-gray-700">10:00 〜 19:00</td>
										</tr>
										<tr className="border-b border-gray-200">
											<td className="py-4 font-medium text-gray-800">土曜・日曜</td>
											<td className="py-4 text-gray-700">10:00 〜 18:00</td>
										</tr>
										<tr>
											<td className="py-4 font-medium text-gray-800">定休日</td>
											<td className="py-4 text-gray-700">水曜日・祝日</td>
										</tr>
									</tbody>
								</table>

								<div className="mt-6 bg-background-light rounded-lg p-4">
									<p className="text-lg text-gray-700">
										<span className="font-semibold text-primary">ご予約について：</span><br />
										お電話または公式LINEからご予約いただけます。<br />
										当日予約も空きがあれば承ります。
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="md:w-1/2">
						<div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
							<div className="bg-primary py-4">
								<h3 className="text-2xl font-bold text-white text-center">料金（税込）</h3>
							</div>
							<div className="p-6">
								<div className="mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-3">基本料金</h4>
									<p className="text-2xl font-bold text-primary">1時間 1,200円</p>
								</div>
								<div className="mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-3">お得なグループ割引</h4>
									<div className="space-y-2">
										{pricingPlans.map((plan) => (
											<div key={plan.persons} className="flex items-center">
												<div className="w-10 h-10 bg-background-light rounded-full flex items-center justify-center text-primary font-bold mr-3">
													{plan.persons}
												</div>
												<p className="text-lg text-gray-700">
													{plan.persons}人の場合：お一人 <span className="font-bold">{plan.pricePerPerson}円</span> / 時間
													{plan.benefits && (
														<span className="ml-2 inline-block bg-secondary text-gray-800 text-sm px-2 py-1 rounded-full">
															{plan.benefits[0]}
														</span>
													)}
												</p>
											</div>
										))}
									</div>
								</div>

								<div className="bg-accent rounded-lg p-4">
									<h4 className="text-lg font-semibold text-gray-800 mb-2">特典キャンペーン</h4>
									<p className="text-gray-700">
										初めての方を紹介すると、紹介者に次回1時間無料券、<br />
										同行者にはドリンク・お菓子をサービス！
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-xl shadow-md overflow-hidden">
					<div className="p-8">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							プレイステーションについて
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<div className="bg-background rounded-lg p-4 mb-4">
									<h4 className="text-xl font-semibold text-gray-800 mb-2">用意しているゲーム</h4>
									<ul className="space-y-2 text-lg text-gray-700">
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											みんなで遊べる簡単パズル・脳トレゲーム
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											テニス・ボウリングなどの軽いスポーツゲーム
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											協力して進めるアドベンチャーゲーム
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											リズムゲーム・音楽ゲーム
										</li>
									</ul>
								</div>

								<div className="bg-background rounded-lg p-4">
									<h4 className="text-xl font-semibold text-gray-800 mb-2">施設について</h4>
									<ul className="space-y-2 text-lg text-gray-700">
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											バリアフリー対応
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											広々としたプレイスペース
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											くつろげるカフェスペース
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											無料Wi-Fi完備
										</li>
									</ul>
								</div>
							</div>

							<div className="space-y-4">
								<div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
									<div className="flex items-center justify-center h-full text-gray-400">
										施設内の様子の画像がここに表示されます
									</div>
								</div>

								<div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
									<div className="flex items-center justify-center h-full text-gray-400">
										プレイスペースの画像がここに表示されます
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8 text-center">
							<p className="text-xl text-gray-700 mb-6">
								誰かと一緒に来ると、もっとお得で、もっと楽しい！
							</p>

							<Link href="/cv" className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
								無料体験に申し込む
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/HeroSection.tsx

// components/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { HeroSectionProps } from '@/types';

export default function HeroSection({
	title = `笑って、遊んで、ちょっと若返る。`,
	subtitle = "60歳からの新しい楽しみ、認知症予防、そして人との交流がここにあります。シニア向けeスポーツ体験スペースへようこそ。",
	ctaText = "無料体験に申し込む",
	ctaLink = "#contact",
	secondaryCtaText = "もっと詳しく知る",
	secondaryCtaLink = "#experience",
	imageSrc = "/hero-image.png", // 実際の画像に変更してください
	imageAlt = "シニアの方々がゲームを楽しむ様子"
}: Partial<HeroSectionProps>) {
	return (
		<section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-background to-background-light">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 md:pr-12">
						<h1 className="leading-tight">
							<span className="text-4xl md:text-7xl font-bold text-gray-800">
								笑って、遊んで、
							</span>
							<br />
							<span className="text-3xl md:text-5xl font-bold text-primary">
								ちょっと若返る。
							</span>
						</h1>


						<p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
							{subtitle}
						</p>

						<div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex">
							<Link
								href={ctaLink}
								className="block w-full md:w-auto text-center bg-secondary text-gray-800 py-4 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
							>
								{ctaText}
							</Link>

							{secondaryCtaText && (
								<Link
									href={secondaryCtaLink}
									className="block w-full md:w-auto text-center bg-white text-primary border-2 border-primary py-4 px-8 rounded-full text-xl font-medium hover:bg-primary hover:text-white transition-all"
								>
									{secondaryCtaText}
								</Link>
							)}
						</div>

						<p className="mt-4 text-gray-600 text-lg">
							まずは見学だけしてみたい方は<Link href="#contact" className="underline text-primary">こちら</Link>
						</p>
					</div>

					<div className="mt-12 md:mt-0 md:w-1/2 relative">
						<div className="relative rounded-xl overflow-hidden shadow-xl">
							{/* 仮の画像プレースホルダー - 実際の画像に置き換えてください */}
							<div className="w-full h-[400px] bg-gray-200 relative">
								<div className="absolute inset-0 flex items-center justify-center text-gray-400">
									<Image
										src={imageSrc}
										alt={imageAlt}
										fill
										style={{ objectFit: 'cover' }}
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>
							</div>

							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
								<p className="text-lg font-medium">ゲームが初めての方も大丈夫。スタッフがやさしくサポートします</p>
								<p className="text-sm">参加者は60歳以上。みなさん初めは初心者でした</p>
							</div>
						</div>

						<div className="absolute -bottom-6 -right-6 bg-accent rounded-full p-4 shadow-lg transform rotate-6">
							<p className="text-xl font-bold text-gray-800">初心者でも<br />分かる！</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}-e 
### FILE: ./components/ExpertRecommendation2.tsx

"use client";
// components/ExpertRecommendation.tsx
import Image from 'next/image';
import { Expert } from '@/types';
import { useState } from 'react';
import ReferenceModal from './ReferenceModal';

// サンプルデータ
const experts: Expert[] = [
	{
		id: '1',
		name: '田中 明彦',
		title: '脳科学研究所 教授',
		image: '/expert-1.png', // 実際の画像パスに変更してください
		quote: 'シニア世代のゲーム活動は単なる娯楽ではなく、脳の活性化に効果的だといわれます。特に他者と一緒に行うゲームは、複数の認知機能を同時に使うため理想的だと考えられます。楽しみながら脳を使うという点で、健康維持に最適な活動と言えるでしょう。'
	},
	{
		id: '2',
		name: '鈴木 健太郎',
		title: '老年医学専門医',
		image: '/expert-2.png',
		quote: '高齢者の健康維持には、身体的な運動だけでなく、脳の運動も不可欠です。日々新しいことに挑戦し、複数の認知機能を同時に使うことが理想的です。eスポーツのような活動は、反射神経や判断力、記憶力を同時に使うため効果的です。また、他者との交流があることで、うつや孤独感の予防にもつながります。'
	}
];

const references = [
	'[1] Greg L. West, Benjamin Rich Zendel, Kyoko Konishi, Jessica Benady-Chorney, Veronique D. Bohbot, Isabelle Peretz, Sylvie Belleville, "Playing Super Mario 64 increases hippocampal grey matter in older adults", PLoS One. 2017 Dec 6;12(12):e0187779.',
	'[2] JA Anguera, J Boccanfuso, JL Rintoul, O Al-Hashimi, F Faraji, J Janowich, E Kong, Y Larraburo, C Rolle, E Johnston, A Gazzaley, "Video game training enhances cognitive control in older adults", Nature. 2013 Sep 5;501(7465):97–101. doi: 10.1038/nature12486',
	'[3] Saara Kukkohovi, Heidi Siira, Sari Arolaakso, Jouko Miettunen, Satu Elo, "The effectiveness of digital gaming on the functioning and activity of older people living in long-term care facilities: a systematic review and meta-analysis", Aging Clin Exp Res. 2023 Jun 20;35(8):1595–1608.',
	'[4] Moritz Bergmann, Ines Wollbrandt, Lisa Gittel, Eva Halbe, Sarah Mackert, Alexandra Philipsen, Silke Lux, "Effects of a video game intervention on symptoms, training motivation, and visuo-spatial memory in depression", ORIGINAL RESEARCH article, Front. Psychiatry , 24 August 2023'
];

export default function ExpertRecommendation2() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeExpert, setActiveExpert] = useState<Expert>(experts[0]);

	return (
		<>
			<ReferenceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} references={references} />
			<section id="expert" className="py-16 bg-gradient-to-b from-blue-50 to-white">
				<div className="container mx-auto px-4">
					{/* ヘッダー部分 */}
					<div className="text-center mb-10">
						<div className="inline-block bg-primary text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
							科学的に実証された効果
						</div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
							毎日の<span className="text-primary">「脳活」</span>で健康寿命を延ばす
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
						</h2>
						<p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
							ゲームは単なる娯楽ではありません。世界中の研究で、認知機能の維持・向上に役立つことが証明されています。
						</p>
					</div>

					{/* 専門家のコメント */}
					<div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
						<div className="flex flex-col md:flex-row">
							{/* 専門家の画像と選択部分 */}
							<div className="md:w-1/3 bg-primary text-white p-6">
								<h3 className="text-xl font-bold mb-6 flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
									</svg>
									専門家の見解
								</h3>
								<div className="space-y-4">
									{experts.map((expert) => (
										<div 
											key={expert.id} 
											className={`flex items-center cursor-pointer p-3 rounded-lg transition-colors ${expert.id === activeExpert.id ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}
											onClick={() => setActiveExpert(expert)}
										>
											<div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-white">
												<Image 
													src={expert.image} 
													alt={expert.name} 
													fill 
													className="object-cover"
												/>
											</div>
											<div>
												<h4 className="font-bold">{expert.name}</h4>
												<p className="text-sm text-white text-opacity-80">{expert.title}</p>
											</div>
										</div>
									))}
								</div>
							</div>
							
							{/* 専門家のコメント部分 */}
							<div className="md:w-2/3 p-8">
								<div className="h-full flex flex-col justify-center">
									<div className="text-5xl text-primary mb-4">"</div>
									<p className="text-xl text-gray-700 mb-6 italic">
										{activeExpert.quote}
									</p>
									<div className="mt-auto">
										<h4 className="font-bold text-xl text-gray-800">{activeExpert.name}</h4>
										<p className="text-gray-600">{activeExpert.title}</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* 研究データのカード */}
					<div className="bg-white rounded-xl p-8 shadow-lg mb-10">
						<div className="flex items-center justify-center mb-6">
							<div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-800">
								研究で実証された健康効果
							</h3>
						</div>
						
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-blue-50 rounded-xl p-6 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
								<div className="flex justify-center mb-4">
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
								</div>
								<h4 className="text-xl font-bold text-primary mb-3 text-center">認知機能の向上</h4>
								<ul className="space-y-3">
									<li className="flex items-start">
										<span className="inline-block w-5 h-5 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mr-2 mt-1">1</span>
										<span className="text-gray-700">6ヶ月間のゲーム活動により、認知機能や短期記憶テストのスコアが有意に向上</span>
									</li>
									<li className="flex items-start">
										<span className="inline-block w-5 h-5 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mr-2 mt-1">2</span>
										<span className="text-gray-700">4週間の高強度ゲーム活動で20代と同様のマルチタスク能力を獲得、6か月後も効果が持続</span>
									</li>
								</ul>
							</div>
							
							<div className="bg-blue-50 rounded-xl p-6 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
								<div className="flex justify-center mb-4">
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</div>
								</div>
								<h4 className="text-xl font-bold text-primary mb-3 text-center">社会性の向上</h4>
								<div className="p-4 bg-white rounded-lg shadow-inner">
									<p className="text-gray-700 italic">
										"社会的交流は報告された主な利点のひとつであり・・・グループ形式のゲームは、発話の増加や、笑い・笑顔などの喜びの表現の増加と関連していた。"
									</p>
									<p className="text-right text-sm text-gray-500 mt-2">研究[3]より</p>
								</div>
							</div>

							<div className="bg-blue-50 rounded-xl p-6 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
								<div className="flex justify-center mb-4">
									<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
								</div>
								<h4 className="text-xl font-bold text-primary mb-3 text-center">精神的健康</h4>
								<div className="flex flex-col items-center">
									<div className="relative w-full h-32 mb-3">
										<div className="absolute inset-0 bg-primary opacity-20 rounded-lg"></div>
										<div className="absolute inset-y-0 left-0 w-3/4 bg-primary opacity-40 rounded-lg"></div>
										<div className="absolute inset-0 flex items-center justify-center">
											<p className="text-lg font-bold text-primary">うつ症状スコア 大幅改善</p>
										</div>
									</div>
									<p className="text-gray-700 text-center">
										6週間のゲーム活動で、標準治療よりも高い効果を確認
									</p>
								</div>
							</div>
						</div>
						
						<div className="mt-6 text-center">
							<button
								onClick={() => setIsModalOpen(true)}
								className="inline-flex items-center text-primary font-medium hover:text-secondary transition border border-primary hover:border-secondary rounded-full px-4 py-2 text-sm"
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
								参考文献を見る [1][2][3][4]
							</button>
						</div>
					</div>

					<div className="px-8 py-10 my-10 bg-gradient-to-r from-gray-700 to-gray-500 text-white rounded-xl shadow-lg">
	<div className="max-w-3xl mx-auto">
		<div className="flex items-center justify-center mb-4">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<h3 className="text-2xl font-bold text-gray-100">
				なぜゲームが健康によいのか？
			</h3>
		</div>
		<div className="bg-white bg-opacity-10 p-6 rounded-lg">
			<p className="text-lg leading-relaxed text-gray-100">
				複数の脳の領域を同時に使うことで、脳の神経回路が活性化し、認知機能の維持・向上に役立ちます。
				特に、<span className="font-bold text-gray-100">判断力・記憶力・反射神経などを同時に使う「デュアルタスク」</span>が効果的とされています。
			</p>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
				<div className="bg-gray-200 bg-opacity-20 p-3 rounded-lg text-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<p className="font-bold text-gray-100">反射神経</p>
				</div>
				<div className="bg-gray-200 bg-opacity-20 p-3 rounded-lg text-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
					</svg>
					<p className="font-bold text-gray-100">判断力</p>
				</div>
				<div className="bg-gray-200 bg-opacity-20 p-3 rounded-lg text-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
					</svg>
					<p className="font-bold text-gray-100">記憶力</p>
				</div>
				<div className="bg-gray-200 bg-opacity-20 p-3 rounded-lg text-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<p className="font-bold text-gray-100">社会性</p>
				</div>
			</div>
		</div>
	</div>
</div>
					
					{/* まとめ部分 */}
					<div className="mt-8 bg-white rounded-xl p-8 shadow-lg text-center relative overflow-hidden">
						<div className="relative z-10 max-w-3xl mx-auto">
							<div className="inline-block bg-secondary text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
								POINT
							</div>
							<h3 className="text-3xl font-bold text-gray-800 mb-4">
								大切なのは「楽しさ」と「継続」
							</h3>
							<p className="text-xl text-gray-700 mb-8">
								健康のために「楽しいから」続けられる。
								それがeスポーツの最大の魅力です。
							</p>
							<div className="inline-block bg-primary text-white py-3 px-8 rounded-full font-bold text-lg shadow-md hover:bg-opacity-90 transition-colors cursor-pointer">
								まずは無料体験に参加する
							</div>
						</div>
						{/* 装飾的な背景要素 */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full opacity-10 -mr-10 -mt-10"></div>
						<div className="absolute bottom-0 left-0 w-24 h-24 bg-primary rounded-full opacity-10 -ml-10 -mb-10"></div>
					</div>
				</div>
			</section>
		</>
	);
}-e 
### FILE: ./next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
  }
  
  module.exports = nextConfig-e 
### FILE: ./next-env.d.ts

/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
