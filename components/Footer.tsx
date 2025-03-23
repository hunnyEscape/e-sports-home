// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-primary text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* ロゴと概要 */}
					<div className="md:col-span-2">
						<h2 className="text-2xl font-bold mb-4">シニア<span className="text-secondary">e</span>スポーツ体験</h2>
						<p className="text-lg mb-4">
							笑って、遊んで、ちょっと若返る。<br />
							60歳からの新しい楽しみ・出会い・健康づくり。
						</p>
						<p className="text-lg">
							〒150-0002<br />
							東京都渋谷区渋谷2-19-15<br />
							宮益坂ビルディング609
						</p>
					</div>

					{/* リンク1 */}
					<div>
						<h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">サービス</h3>
						<ul className="space-y-2 text-lg">
							<li>
								<Link href="#experience" className="hover:text-secondary transition-colors">
									体験内容
								</Link>
							</li>
							<li>
								<Link href="#pricing" className="hover:text-secondary transition-colors">
									料金・時間
								</Link>
							</li>
							<li>
								<Link href="/cv" className="hover:text-secondary transition-colors">
									無料体験予約
								</Link>
							</li>
							<li>
								<Link href="#contact" className="hover:text-secondary transition-colors">
									アクセス
								</Link>
							</li>
						</ul>
					</div>

					{/* リンク2 */}
					<div>
						<h3 className="text-xl font-semibold mb-4 border-b border-white pb-2">お問い合わせ</h3>
						<ul className="space-y-2 text-lg">
							<li className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								<Link href="tel:0312345678" className="hover:text-secondary transition-colors">
									03-1234-5678
								</Link>
							</li>
							<li className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<Link href="mailto:info@senior-esports.example.com" className="hover:text-secondary transition-colors">
									info@senior-esports.example.com
								</Link>
							</li>
							<li className="flex items-center mt-4">
								<Link
									href="https://lin.ee/yourlineid"
									target="_blank"
									className="flex items-center bg-white text-primary py-2 px-4 rounded-full hover:bg-secondary transition-colors"
								>
									<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
										<path d="M19.365 9.89c.50 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91h-2.681a.91.91 0 01-.906-.91V10.8c0-.5.406-.91.906-.91h3.456zM13.64 14.088a.91.91 0 01.906.91v2.675a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-1.766h-2.45v1.766a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-2.675a.91.91 0 01.906-.91h4.262zm-7.265-4.198a.91.91 0 01.906.91v6.583a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-6.583a.91.91 0 01.906-.91zm13.265-1.073C20.947 8.817 22 9.87 22 11.177v6.839c0 1.308-1.053 2.36-2.36 2.36H4.36C3.053 20.376 2 19.324 2 18.016v-6.839c0-1.308 1.053-2.36 2.36-2.36h15.94z" />
									</svg>
									LINE公式
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-white/30 text-center">
					<p className="text-lg">
						営業時間：平日 10:00〜19:00 / 土日 10:00〜18:00（水曜・祝日定休）
					</p>

					<div className="mt-6 flex flex-wrap justify-center gap-6">
						<Link href="/privacy-policy" className="text-lg hover:text-secondary transition-colors">
							プライバシーポリシー
						</Link>
						<Link href="/terms" className="text-lg hover:text-secondary transition-colors">
							利用規約
						</Link>
						<Link href="/company" className="text-lg hover:text-secondary transition-colors">
							運営会社
						</Link>
					</div>

					<p className="mt-8 text-lg">
						&copy; {new Date().getFullYear()} シニアeスポーツ体験スペース All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}