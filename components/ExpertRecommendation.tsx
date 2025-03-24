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
							<span className="hidden md:inline">楽しい<span className="text-primary">「脳活」</span>で健康寿命を延ばす</span>
							<span className="md:hideen">楽しい<span className="text-primary">「脳活」</span>で<br/>健康寿命を延ばす</span>
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
					<div className="bg-background-light rounded-xl p-4 md:p-8 shadow-md">
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


					<div className="px-4 md:px-8 py-10 mt-5 bg-opacity-30">
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
								{/* モバイルでは縦並び、md以上では横並び */}
								<div className="flex flex-col items-center md:flex-row md:items-start">
									{/* 脳みそキャラクター画像 */}
									<div className="flex-shrink-0 w-32 h-32 md:w-36 md:h-36 mb-4 md:mb-0 md:-mt-6">
										<img
											src="/brain-character.png"
											alt="脳みそキャラクター"
											className="w-full h-full object-contain"
										/>
									</div>

									{/* テキスト部分 */}
									<div className="flex-grow bg-white rounded-xl p-6 shadow-md relative w-full">
										{/* 吹き出しの矢印 - モバイルでは上部、デスクトップでは左側 */}
										<div className="absolute md:hidden top-0 left-1/2 w-4 h-4 bg-white transform rotate-45 -translate-y-2 -translate-x-2"></div>
										<div className="hidden md:block absolute left-0 top-8 w-4 h-4 bg-white transform rotate-45 -translate-x-2"></div>

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


					<div className="mt-0 bg-white rounded-xl p-4 md:p-8 shadow-lg text-center relative overflow-hidden">
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
							<div className="mt-8 text-center">
							<a
								href="#contact"
								className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
							>
								まずは無料体験に参加する
							</a>
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
}