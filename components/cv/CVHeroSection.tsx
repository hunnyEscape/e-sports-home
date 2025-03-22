// components/cv/CVHeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function CVHeroSection() {
	return (
		<section className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-white via-background to-background-light">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					<div className="md:w-1/2 md:pr-12">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
							<span className="text-primary">60代から始めたゲーム</span>が、<br />
							私の毎日を変えてくれました。
						</h1>

						<p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
							「私にゲームなんて…」と思っていた方々が、今では笑顔で楽しむ姿を見てください。
							シニア世代の新しい楽しみ、認知症予防、そして人との交流がここにあります。
						</p>

						<div className="mt-8 bg-accent rounded-lg p-4 inline-block shadow-md transform rotate-2">
							<p className="text-xl font-bold text-gray-800">
								参加者の平均年齢は65歳。<br />みなさん最初は初心者でした
							</p>
						</div>

						<div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex">
							<a
								href="#contact-form"
								className="block w-full md:w-auto text-center bg-secondary text-gray-800 py-4 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
							>
								無料体験に申し込む（3分で完了）
							</a>

							<Link
								href="https://lin.ee/yourlineid"
								target="_blank"
								className="block w-full md:w-auto text-center bg-white text-primary border-2 border-primary py-4 px-8 rounded-full text-xl font-medium hover:bg-primary hover:text-white transition-all"
							>
								LINEで質問する
							</Link>
						</div>
					</div>

					<div className="mt-12 md:mt-0 md:w-1/2 relative">
						<div className="relative rounded-xl overflow-hidden shadow-xl">
							{/* 仮の画像プレースホルダー */}
							<div className="w-full h-[400px] bg-gray-200 relative">
								<div className="absolute inset-0 flex items-center justify-center text-gray-400">
									<p>実際のシニア体験者の写真がここに表示されます</p>
								</div>
							</div>
						</div>

						<div className="absolute -bottom-6 -right-6 bg-background-light rounded-full p-4 shadow-lg">
							<p className="text-xl font-bold text-primary">
								はじめてでも<br />楽しめる！
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}