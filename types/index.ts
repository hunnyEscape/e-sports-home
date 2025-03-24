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
  }