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
}