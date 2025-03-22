// components/cv/EmpathySection.tsx
import Image from 'next/image';

export default function EmpathySection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-800">
						最近、なんとなく...そんなふうに感じること、ありませんか？
					</h2>
				</div>

				<div className="bg-background rounded-xl p-8 shadow-md">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								人と話す機会が、ぐんと減った気がする
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								スマホやテレビばかり見て、1日が終わってしまう
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								また忘れちゃった...が増えてきた
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								体は元気だけど、どこか張り合いがない
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								出かける理由も、話す相手も、なんとなく減ってきた
							</p>
						</div>

						<div className="flex items-start">
							<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<p className="ml-4 text-xl text-gray-700">
								でも、何をすればいいか分からない
							</p>
						</div>
					</div>

					<div className="mt-8 text-center">
						<p className="text-2xl font-bold text-gray-800">
							実はそう感じていたのは、あなただけではありません
						</p>
						<p className="mt-4 text-xl text-gray-700">
							私たちの体験スペースに来られる方の多くが、はじめは『ゲームなんて...』と戸惑っていました。
							でも今では、『毎週ここに来るのが楽しみ』と笑顔で過ごされています。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}