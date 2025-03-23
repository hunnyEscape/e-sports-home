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
}