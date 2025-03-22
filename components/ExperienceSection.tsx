// components/ExperienceSection.tsx
import Image from 'next/image';

export default function ExperienceSection() {
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
							2つのボタンだけの簡単操作。初めてでも笑顔になれるゲームをご用意しています。
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
							優しいスタッフが一人ひとりの進み具合に合わせてサポートします。
						</p>
					</div>

					{/* 体験項目3 */}
					<div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex justify-center mb-4">
							<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
								3
							</div>
						</div>
						<h3 className="text-2xl font-bold text-center text-gray-800 mb-3">お茶でリラックス</h3>
						<p className="text-lg text-gray-700">
							ホッと一息。お茶を飲みながらリラックスした雰囲気で楽しめます。
						</p>
					</div>

					{/* 体験項目4 */}
					<div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
						<div className="flex justify-center mb-4">
							<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
								4
							</div>
						</div>
						<h3 className="text-2xl font-bold text-center text-gray-800 mb-3">交流タイム（希望者）</h3>
						<p className="text-lg text-gray-700">
							他の参加者との交流も楽しめます。もちろん、見学だけでもOKです。
						</p>
					</div>
				</div>

				<div className="mt-16 relative">
					<div className="bg-background-light rounded-xl p-8 md:p-12">
						<div className="md:flex items-center">
							<div className="md:w-1/2 md:pr-8">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
									実際の体験会の様子
								</h3>
								<p className="text-lg text-gray-700 mb-6">
									みなさん最初は「私にできるかな？」と不安そうですが、
									すぐに笑顔になって楽しんでいます。年齢や経験は関係ありません。
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
										<div className="flex items-center justify-center h-full text-gray-400">
											体験会の様子の画像がここに表示されます
										</div>
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
}