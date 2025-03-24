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
}