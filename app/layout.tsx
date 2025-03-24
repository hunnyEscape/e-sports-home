// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
	title: 'eスポーツさくら｜立川のシニア向けeスポーツ体験スペース',
	description:
		'立川で話題の「eスポーツさくら」！60歳からの新しい趣味に。笑って、遊んで、ちょっと若返る。認知症予防・健康づくり・仲間づくりに最適な、シニア向けeスポーツ体験スペースです。',
	keywords:
		'eスポーツさくら, シニア, eスポーツ, 高齢者, 立川, ゲーム, 認知症予防, 脳トレ, 交流, 健康, シニア向け趣味, 高齢者施設, 新しい習い事',
	robots: 'index, follow',
	icons: {
		icon: '/favicon.ico',
	},
	openGraph: {
		title: 'eスポーツさくら｜シニア向けeスポーツで楽しく健康に',
		description: '立川のシニア向けeスポーツ体験「eスポーツさくら」。笑って、遊んで、ちょっと若返る。新しい健康習慣',
		url: 'https://esports-sakura.jp',
		siteName: 'eスポーツさくら',
		images: [
			{
				url: 'https://esports-sakura.jp/ogp.png',
				width: 1200,
				height: 630,
				alt: 'eスポーツさくらのロゴ',
			},
		],
		locale: 'ja_JP',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'eスポーツさくら｜立川のシニア向けeスポーツ',
		description: '60代から楽しめる！立川のシニア向けeスポーツ体験スペース「eスポーツさくら」。健康づくり、仲間づくりにも最適。',
		images: ['https://esports-sakura.jp/ogp.png'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className="scroll-smooth">
			<head>
				{/* JSON-LD 構造化データ（ローカルビジネス） */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "LocalBusiness",
							"name": "eスポーツさくら",
							"description": "立川にあるシニア向けのeスポーツ体験施設。60歳からの脳トレ、健康、交流をサポートします。",
							"url": "https://esports-sakura.jp",
							"telephone": "090-8364-7759",
							"address": {
								"@type": "PostalAddress",
								"streetAddress": "渋谷2-19-15宮益坂ビルディング609",
								"addressLocality": "渋谷区",
								"addressRegion": "東京都",
								"postalCode": "150-0002",
								"addressCountry": "JP"
							},
							"openingHoursSpecification": [
								{
									"@type": "OpeningHoursSpecification",
									"dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
									"opens": "10:00",
									"closes": "17:00"
								}
							],
							"image": "https://esports-sakura.jp/ogp.jpg",
							"sameAs": [
								"https://line.me/R/ti/p/@your_line_id"
							]
						}),
					}}
				/>
			</head>
			<body className={inter.className}>
				<SmoothScroll />
				{children}
			</body>
		</html>
	);
}
