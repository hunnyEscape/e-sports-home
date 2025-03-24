// components/cv/HopeSection.tsx
import Image from 'next/image';

export default function HopeSection() {
	const imageSrc = "/HopeSection.png";
	const imageAlt = "シニアの方々がゲームを楽しむ様子";
	return (
		<section className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="text-center mb-12">
					{/*
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						ある日、試してみた<span className="text-primary">"eスポーツ"</span>。<br />
						そこから毎日が変わった。
					</h2>
					*/}
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						ある日、試してみた<span className="text-primary">"eスポーツ"</span>。<br />
						そこから毎日が変わる。
					</h2>
				</div>
				<div className="md:flex items-center md:space-x-8">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<div className="bg-white rounded-xl overflow-hidden shadow-lg">
							{/* 仮の画像プレースホルダー */}
							<div className="aspect-w-1 aspect-h-1 bg-gray-200">
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

					<div className="md:w-1/2">
						{/*
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							ただ遊ぶだけなのに、なんだか元気になってる
						</h3>
						*/}
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							遊ぶだけなのに、元気になる
						</h3>

						<div className="space-y-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 w-8 h-8 bg-background-light rounded-full flex items-center justify-center text-primary font-bold mr-3">
									1
								</div>
								<div>
									<h4 className="text-xl font-semibold text-gray-800">簡単</h4>
									<p className="text-lg text-gray-700">
										操作は2つのボタンだけ。まるで昔のボードゲームのような、誰でも楽しめるシンプルさ。
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 w-8 h-8 bg-background-light rounded-full flex items-center justify-center text-primary font-bold mr-3">
									2
								</div>
								<div>
									<h4 className="text-xl font-semibold text-gray-800">健康的</h4>
									<p className="text-lg text-gray-700">
										注意力・判断力・記憶力が自然と刺激され、「気づいたら脳がスッキリ」という効果。
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 w-8 h-8 bg-background-light rounded-full flex items-center justify-center text-primary font-bold mr-3">
									3
								</div>
								<div>
									<h4 className="text-xl font-semibold text-gray-800">社会的</h4>
									<p className="text-lg text-gray-700">
										協力プレイで初対面の人とも自然と会話が生まれ、「また一緒にやりましょうね」と距離が縮まる。
									</p>
								</div>
							</div>
						</div>

						<div className="mt-6 text-center">
							<p className="text-xl font-bold text-gray-800">
								ゲームって子どもだけのものだと思ってた。<br/>でも実際は、健康のきっかけ、人と笑い合える場所だったんです。
							</p>
						</div>

						<div className="mt-8 text-center">
							<a
								href="#contact-form"
								className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
							>
								私も体験してみる
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}