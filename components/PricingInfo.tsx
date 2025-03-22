// components/PricingInfo.tsx
import Image from 'next/image';
import Link from 'next/link';
import { PricingPlan } from '@/types';

// サンプルデータ
const pricingPlans: PricingPlan[] = [
	{ persons: 1, pricePerPerson: 1200 },
	{ persons: 2, pricePerPerson: 600 },
	{ persons: 3, pricePerPerson: 400 },
	{ persons: 4, pricePerPerson: 300, benefits: ['最もお得なプラン', 'おやつ1品サービス'] }
];

export default function PricingInfo() {
	return (
		<section id="pricing" className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						ご利用<span className="text-primary">案内</span>
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						シンプルでわかりやすい料金体系です
					</p>
				</div>

				<div className="md:flex md:space-x-8 mb-16">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
							<div className="bg-primary py-4">
								<h3 className="text-2xl font-bold text-white text-center">営業時間</h3>
							</div>

							<div className="p-6">
								<table className="w-full text-lg">
									<tbody>
										<tr className="border-b border-gray-200">
											<td className="py-4 font-medium text-gray-800">平日</td>
											<td className="py-4 text-gray-700">10:00 〜 19:00</td>
										</tr>
										<tr className="border-b border-gray-200">
											<td className="py-4 font-medium text-gray-800">土曜・日曜</td>
											<td className="py-4 text-gray-700">10:00 〜 18:00</td>
										</tr>
										<tr>
											<td className="py-4 font-medium text-gray-800">定休日</td>
											<td className="py-4 text-gray-700">水曜日・祝日</td>
										</tr>
									</tbody>
								</table>

								<div className="mt-6 bg-background-light rounded-lg p-4">
									<p className="text-lg text-gray-700">
										<span className="font-semibold text-primary">ご予約について：</span><br />
										お電話または公式LINEからご予約いただけます。<br />
										当日予約も空きがあれば承ります。
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="md:w-1/2">
						<div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
							<div className="bg-primary py-4">
								<h3 className="text-2xl font-bold text-white text-center">料金（税込）</h3>
							</div>

							<div className="p-6">
								<div className="mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-3">基本料金</h4>
									<p className="text-2xl font-bold text-primary">1時間 1,200円</p>
									<p className="text-lg text-gray-700 mt-2">
										※ドリンク1杯付き（コーヒー、紅茶、緑茶）
									</p>
								</div>

								<div className="mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-3">お得なグループ割引</h4>
									<div className="space-y-2">
										{pricingPlans.map((plan) => (
											<div key={plan.persons} className="flex items-center">
												<div className="w-10 h-10 bg-background-light rounded-full flex items-center justify-center text-primary font-bold mr-3">
													{plan.persons}
												</div>
												<p className="text-lg text-gray-700">
													{plan.persons}人の場合：お一人 <span className="font-bold">{plan.pricePerPerson}円</span> / 時間
													{plan.benefits && (
														<span className="ml-2 inline-block bg-secondary text-gray-800 text-sm px-2 py-1 rounded-full">
															{plan.benefits[0]}
														</span>
													)}
												</p>
											</div>
										))}
									</div>
								</div>

								<div className="bg-accent rounded-lg p-4">
									<h4 className="text-lg font-semibold text-gray-800 mb-2">特典キャンペーン</h4>
									<p className="text-gray-700">
										初めての方を紹介すると、紹介者に次回1時間無料券、<br />
										同行者にはドリンク・お菓子をサービス！
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-xl shadow-md overflow-hidden">
					<div className="p-8">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							プレイステーションについて
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<div className="bg-background rounded-lg p-4 mb-4">
									<h4 className="text-xl font-semibold text-gray-800 mb-2">用意しているゲーム</h4>
									<ul className="space-y-2 text-lg text-gray-700">
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											みんなで遊べる簡単パズル・脳トレゲーム
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											テニス・ボウリングなどの軽いスポーツゲーム
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											協力して進めるアドベンチャーゲーム
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											リズムゲーム・音楽ゲーム
										</li>
									</ul>
								</div>

								<div className="bg-background rounded-lg p-4">
									<h4 className="text-xl font-semibold text-gray-800 mb-2">施設について</h4>
									<ul className="space-y-2 text-lg text-gray-700">
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											バリアフリー対応
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											広々としたプレイスペース
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											くつろげるカフェスペース
										</li>
										<li className="flex items-start">
											<span className="text-primary font-bold mr-2">✓</span>
											無料Wi-Fi完備
										</li>
									</ul>
								</div>
							</div>

							<div className="space-y-4">
								<div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
									<div className="flex items-center justify-center h-full text-gray-400">
										施設内の様子の画像がここに表示されます
									</div>
								</div>

								<div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
									<div className="flex items-center justify-center h-full text-gray-400">
										プレイスペースの画像がここに表示されます
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8 text-center">
							<p className="text-xl text-gray-700 mb-6">
								誰かと一緒に来ると、もっとお得で、もっと楽しい！
							</p>

							<Link href="/cv" className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
								無料体験に申し込む
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}