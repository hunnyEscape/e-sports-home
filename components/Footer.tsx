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
							{/*<li>
								<Link href="#pricing" className="hover:text-secondary transition-colors">
									料金・時間
								</Link>
							</li>*/}
							<li>
								<Link href="#contact" className="hover:text-secondary transition-colors">
									無料体験予約
								</Link>
							</li>
							<li>
								<Link href="#access" className="hover:text-secondary transition-colors">
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
									090-8364-7759
								</Link>
							</li>
							<li className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<Link href="mailto:info@marugoto-works.com" className="hover:text-secondary transition-colors">
									info@marugoto-works.com
								</Link>
							</li>
							<p className="text-lg">
								〒150-0002<br />
								東京都渋谷区渋谷2-19-15<br />
								宮益坂ビルディング609
							</p>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-white/30 text-center">
					{/*
									<p className="text-lg">
						営業時間：平日 10:00〜19:00 / 土日 10:00〜18:00（水曜・祝日定休）
					</p>
				*/}

					<div className="mt-2 flex flex-wrap justify-center gap-6">
						<Link href="/privacy-policy" className="text-lg hover:text-secondary transition-colors">
							プライバシーポリシー
						</Link>
						<Link href="/terms" className="text-lg hover:text-secondary transition-colors">
							利用規約
						</Link>
						{/*
						<Link href="/company" className="text-lg hover:text-secondary transition-colors">
							運営会社
						</Link>
						*/}
					</div>

					<p className="mt-6 text-lg">
						&copy; {new Date().getFullYear()} eスポーツさくら 立川 All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}