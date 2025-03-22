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
}