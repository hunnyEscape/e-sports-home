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
}