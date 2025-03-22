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
### FILE: ./app/layout.tsx

// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'シニアeスポーツ体験 | 60歳からの新しい楽しみ',
	description: '笑って、遊んで、ちょっと若返る。シニア向けeスポーツ体験スペースで認知症予防、交流促進、楽しい時間を過ごしましょう。初めての方でも安心して楽しめます。',
	keywords: 'シニア, eスポーツ, 高齢者, ゲーム, 認知症予防, 脳トレ, 交流, 健康',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className="scroll-smooth">
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}-e 
### FILE: ./app/page.tsx

// app/page.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />

			<HeroSection />

			{/* 体験セクション（これから作成） */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="section-title">無料体験会って何するの？</h2>
					<p className="section-subtitle">
						初めての方でも安心して楽しめる体験内容をご紹介します
					</p>
					<p className="text-gray-600">
						※体験セクションはこれから実装されます
					</p>
				</div>
			</section>

			{/* eスポーツの説明セクション（これから作成） */}
			<section className="py-16 bg-background">
				<div className="container mx-auto px-4 text-center">
					<h2 className="section-title">"e"スポーツって何？</h2>
					<p className="section-subtitle">
						ゲームで楽しく脳トレ！シニアの健康をサポート
					</p>
					<p className="text-gray-600">
						※eスポーツの説明セクションはこれから実装されます
					</p>
				</div>
			</section>

			<Footer />
		</main>
	);
}-e 
### FILE: ./tailwind.config.ts

// tailwind.config.ts
import type { Config } from 'tailwindcss';
const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
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
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
				],
			},
			borderRadius: {
				'xl': '1rem',
				'full': '9999px',
			},
			boxShadow: {
				'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
};

export default config;-e 
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
						<p className="text-lg">
							〒100-0001<br />
							東京都千代田区千代田1-1<br />
							千代田ビル3F
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
							<li>
								<Link href="#pricing" className="hover:text-secondary transition-colors">
									料金・時間
								</Link>
							</li>
							<li>
								<Link href="/cv" className="hover:text-secondary transition-colors">
									無料体験予約
								</Link>
							</li>
							<li>
								<Link href="#contact" className="hover:text-secondary transition-colors">
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
									03-1234-5678
								</Link>
							</li>
							<li className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<Link href="mailto:info@senior-esports.example.com" className="hover:text-secondary transition-colors">
									info@senior-esports.example.com
								</Link>
							</li>
							<li className="flex items-center mt-4">
								<Link
									href="https://lin.ee/yourlineid"
									target="_blank"
									className="flex items-center bg-white text-primary py-2 px-4 rounded-full hover:bg-secondary transition-colors"
								>
									<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
										<path d="M19.365 9.89c.50 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91h-2.681a.91.91 0 01-.906-.91V10.8c0-.5.406-.91.906-.91h3.456zM13.64 14.088a.91.91 0 01.906.91v2.675a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-1.766h-2.45v1.766a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-2.675a.91.91 0 01.906-.91h4.262zm-7.265-4.198a.91.91 0 01.906.91v6.583a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-6.583a.91.91 0 01.906-.91zm13.265-1.073C20.947 8.817 22 9.87 22 11.177v6.839c0 1.308-1.053 2.36-2.36 2.36H4.36C3.053 20.376 2 19.324 2 18.016v-6.839c0-1.308 1.053-2.36 2.36-2.36h15.94z" />
									</svg>
									LINE公式
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-white/30 text-center">
					<p className="text-lg">
						営業時間：平日 10:00〜19:00 / 土日 10:00〜18:00（水曜・祝日定休）
					</p>

					<div className="mt-6 flex flex-wrap justify-center gap-6">
						<Link href="/privacy-policy" className="text-lg hover:text-secondary transition-colors">
							プライバシーポリシー
						</Link>
						<Link href="/terms" className="text-lg hover:text-secondary transition-colors">
							利用規約
						</Link>
						<Link href="/company" className="text-lg hover:text-secondary transition-colors">
							運営会社
						</Link>
					</div>

					<p className="mt-8 text-lg">
						&copy; {new Date().getFullYear()} シニアeスポーツ体験スペース All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
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
	{ label: '料金・時間', href: '#pricing' },
	{ label: 'よくある質問', href: '#faq' },
	{ label: 'お問い合わせ', href: '#contact' },
	{ label: '無料体験予約', href: '/cv', isButton: true },
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
### FILE: ./components/HeroSection.tsx

// components/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { HeroSectionProps } from '@/types';

export default function HeroSection({
	title = "笑って、遊んで、ちょっと若返る。",
	subtitle = "60歳からの新しい楽しみ、認知症予防、そして人との交流がここにあります。シニア向けeスポーツ体験スペースへようこそ。",
	ctaText = "無料体験に申し込む",
	ctaLink = "/cv",
	secondaryCtaText = "もっと詳しく知る",
	secondaryCtaLink = "#experience",
	imageSrc = "/hero-image.jpg", // 実際の画像に変更してください
	imageAlt = "シニアの方々がゲームを楽しむ様子"
}: Partial<HeroSectionProps>) {
	return (
		<section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-background to-background-light">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 md:pr-12">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
							{title.split('.')[0]}
							<span className="block mt-2 text-primary">
								{title.includes('.') ? title.split('.')[1] : ''}
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
									{/* 画像がある場合はこちらを使用 */}
									{/* <Image 
                    src={imageSrc} 
                    alt={imageAlt} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  /> */}
									<p>ヒーロー画像がここに表示されます</p>
								</div>
							</div>

							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
								<p className="text-lg font-medium">ゲームが初めての方も大丈夫。スタッフがやさしくサポートします</p>
								<p className="text-sm">参加者の平均年齢は65歳。みなさん初めは初心者でした</p>
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
