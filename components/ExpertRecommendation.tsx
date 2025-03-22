// components/ExpertRecommendation.tsx
import Image from 'next/image';
import { Expert } from '@/types';

// サンプルデータ
const experts: Expert[] = [
	{
		id: '1',
		name: '田中 明彦',
		title: '脳科学研究所 教授',
		image: '/images/expert-1.jpg', // 実際の画像パスに変更してください
		quote: 'シニア世代のゲーム活動は単なる娯楽ではなく、脳の活性化に非常に効果的です。特に他者と一緒に行うゲームは、複数の認知機能を同時に使うため理想的です。楽しみながら脳を使うという点で、健康維持に最適な活動と言えるでしょう。'
	},
	{
		id: '2',
		name: '鈴木 健太郎',
		title: '老年医学専門医',
		image: '/images/expert-2.jpg', // 実際の画像パスに変更してください
		quote: '高齢者の健康維持には、身体的な運動だけでなく、脳の運動も不可欠です。日々新しいことに挑戦し、複数の認知機能を同時に使うことが理想的です。eスポーツのような活動は、反射神経や判断力、記憶力を同時に使うため効果的です。また、他者との交流があることで、うつや孤独感の予防にもつながります。'
	}
];

export default function ExpertRecommendation() {
	return (
		<section id="expert" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						専門家も認める<span className="text-primary">"脳の活性化"</span>効果
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						ゲームは単なる娯楽ではなく、認知機能の維持・向上にも役立ちます
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{experts.map((expert) => (
						<div key={expert.id} className="bg-background rounded-xl overflow-hidden shadow-md">
							<div className="md:flex">
								<div className="md:w-1/3 p-6 flex flex-col items-center justify-center bg-background-light">
									<div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200">
										{/* 画像がある場合はImageコンポーネントを使用 */}
										<div className="w-full h-full flex items-center justify-center text-gray-400">
											写真
										</div>
									</div>
									<h3 className="text-xl font-bold text-gray-800 text-center">{expert.name}</h3>
									<p className="text-primary font-medium text-center">{expert.title}</p>
								</div>

								<div className="md:w-2/3 p-6">
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

				<div className="bg-background-light rounded-xl p-8 shadow-md">
					<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						研究で実証された効果
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex justify-center mb-4">
								<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
							</div>
							<h4 className="text-xl font-bold text-gray-800 mb-2 text-center">認知機能の向上</h4>
							<p className="text-gray-700">
								定期的なゲーム活動により、記憶力や注意力などの認知機能スコアが平均12%向上（カリフォルニア大学研究）
							</p>
						</div>

						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex justify-center mb-4">
								<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
									</svg>
								</div>
							</div>
							<h4 className="text-xl font-bold text-gray-800 mb-2 text-center">社会性の向上</h4>
							<p className="text-gray-700">
								デイサービスでのゲーム導入により、発語数と笑顔の回数が1.8倍に増加し、コミュニケーションが活発化
							</p>
						</div>

						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex justify-center mb-4">
								<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
							</div>
							<h4 className="text-xl font-bold text-gray-800 mb-2 text-center">精神的健康</h4>
							<p className="text-gray-700">
								週2回のゲーム活動を取り入れたグループでは、うつ症状の指標が23%低下し、幸福度評価が向上
							</p>
						</div>
					</div>
				</div>

				<div className="mt-12 text-center">
					<a href="/cv" className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
						科学的に効果のある体験をしてみる
					</a>
					<p className="mt-4 text-lg text-gray-600">
						※効果には個人差があります
					</p>
				</div>
			</div>
		</section>
	);
}