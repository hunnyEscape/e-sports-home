// components/cv/AchievementsSection.tsx
import Image from 'next/image';

export default function AchievementsSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800">
						<span className="text-primary">実績</span>・活動紹介
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						各地で広がる「シニアeスポーツ」の取り組み
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<div className="bg-background rounded-xl p-6 text-center">
						<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
							10
						</div>
						<h3 className="text-2xl font-bold text-gray-800 mb-2">導入施設</h3>
						<p className="text-lg text-gray-700">
							高齢者施設や公民館など10箇所で定期開催
						</p>
					</div>

					<div className="bg-background rounded-xl p-6 text-center">
						<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
							500+
						</div>
						<h3 className="text-2xl font-bold text-gray-800 mb-2">参加者数</h3>
						<p className="text-lg text-gray-700">
							これまでに500名以上が体験し、継続率は85%
						</p>
					</div>

					<div className="bg-background rounded-xl p-6 text-center">
						<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
							3
						</div>
						<h3 className="text-2xl font-bold text-gray-800 mb-2">自治体連携</h3>
						<p className="text-lg text-gray-700">
							3つの自治体と連携し、健康促進プログラムとして採用
						</p>
					</div>
				</div>

				<div className="bg-background-light rounded-xl p-8 shadow-md mb-12">
					<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						導入施設からの声
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
									<div className="w-full h-full flex items-center justify-center text-gray-400">
										写真
									</div>
								</div>
								<div>
									<h4 className="text-lg font-bold text-gray-800">山田 美咲</h4>
									<p className="text-primary text-sm">東京都 ○○デイサービスセンター 施設長</p>
								</div>
							</div>

							<p className="text-gray-700">
								「導入してから利用者同士の会話が増え、施設の雰囲気が明るくなりました。特に男性利用者の参加意欲が高まったことが大きな変化です。認知症予防としても効果を実感しています。」
							</p>
						</div>

						<div className="bg-white rounded-lg p-6 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
									<div className="w-full h-full flex items-center justify-center text-gray-400">
										写真
									</div>
								</div>
								<div>
									<h4 className="text-lg font-bold text-gray-800">鈴木 一郎</h4>
									<p className="text-primary text-sm">神奈川県 △△シニアコミュニティ 代表</p>
								</div>
							</div>

							<p className="text-gray-700">
								「最初は懐疑的だった会員も、実際に体験すると楽しさに驚き、今では固定ファンが多数います。地域の交流イベントとしても定着し、異なる世代間の会話のきっかけにもなっています。」
							</p>
						</div>
					</div>
				</div>

				<div className="bg-background-light rounded-xl p-8">
					<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						メディア掲載実績
					</h3>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
							<p className="text-xl font-bold text-gray-800">○○新聞</p>
						</div>
						<div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
							<p className="text-xl font-bold text-gray-800">△△テレビ</p>
						</div>
						<div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
							<p className="text-xl font-bold text-gray-800">□□雑誌</p>
						</div>
						<div className="bg-white rounded-lg p-4 flex items-center justify-center h-24">
							<p className="text-xl font-bold text-gray-800">◇◇ラジオ</p>
						</div>
					</div>
				</div>

				<div className="mt-12 text-center">
					<p className="text-2xl font-bold text-gray-800 mb-6">
						あなたもこの実績ある取り組みに参加してみませんか？
					</p>

					<a
						href="#contact-form"
						className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
					>
						無料体験に申し込む
					</a>
				</div>
			</div>
		</section>
	);
}