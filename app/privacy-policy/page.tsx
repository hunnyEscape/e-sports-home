// app/privacy-policy/page.tsx
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

export default function PrivacyPolicyPage() {
	return (
		<main className="min-h-screen">
			<Header />

			<section className="pt-32 pb-16 bg-gradient-to-br from-white via-background to-background-light">
				<div className="container mx-auto px-4 max-w-4xl">
					<FadeInSection>
						<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
							プライバシーポリシー
						</h1>

						<div className="bg-white rounded-xl p-8 shadow-md">
							<p className="text-lg text-gray-700 mb-6">
								シニアeスポーツ体験（以下、「当サービス」）は、お客様の個人情報保護を重要と考えております。
								以下のプライバシーポリシーでは、当サービスが収集・利用する個人情報の取り扱いについて説明いたします。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">1. 収集する個人情報</h2>
							<p className="text-lg text-gray-700 mb-4">
								当サービスでは、以下の個人情報を収集することがあります：
							</p>
							<ul className="list-disc pl-8 text-lg text-gray-700 mb-6 space-y-2">
								<li>氏名</li>
								<li>電話番号</li>
								<li>メールアドレス</li>
								<li>年齢</li>
								<li>予約情報</li>
								<li>活動記録（参加履歴、ゲームスコアなど）</li>
							</ul>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">2. 個人情報の利用目的</h2>
							<p className="text-lg text-gray-700 mb-4">
								収集した個人情報は、以下の目的で利用します：
							</p>
							<ul className="list-disc pl-8 text-lg text-gray-700 mb-6 space-y-2">
								<li>ご予約・お申し込みの確認・管理</li>
								<li>サービス提供（体験会の実施など）</li>
								<li>お客様からのお問い合わせへの対応</li>
								<li>サービス改善のためのフィードバック分析</li>
								<li>新しいサービスや体験会のご案内（お客様の同意がある場合）</li>
								<li>健康・能力向上の効果測定（匿名化したデータとして）</li>
							</ul>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">3. 個人情報の第三者提供について</h2>
							<p className="text-lg text-gray-700 mb-6">
								当サービスは、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
							</p>
							<ul className="list-disc pl-8 text-lg text-gray-700 mb-6 space-y-2">
								<li>お客様の同意がある場合</li>
								<li>法令に基づく場合</li>
								<li>人の生命、身体または財産の保護のために必要がある場合</li>
								<li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
								<li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
							</ul>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">4. 写真・動画の撮影について</h2>
							<p className="text-lg text-gray-700 mb-6">
								当サービスでは、体験会やイベントの様子を写真や動画で撮影し、ウェブサイトやSNS等で公開することがあります。
								撮影の際は事前にお知らせし、ご希望されない方は撮影対象から外させていただきます。
								また、すでに公開された写真・動画について削除をご希望の場合は、お問い合わせフォームよりご連絡ください。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">5. 安全管理措置</h2>
							<p className="text-lg text-gray-700 mb-6">
								当サービスは、収集した個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
								また、個人情報を取り扱う従業者に対して、個人情報の適正な取り扱いを周知徹底いたします。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">6. 保有個人データの開示・訂正・利用停止等について</h2>
							<p className="text-lg text-gray-700 mb-6">
								お客様は、当サービスに対して、自己に関する個人情報の開示、訂正、追加または削除、利用の停止または消去および第三者への提供の停止（以下「開示等」といいます）を請求することができます。
								開示等のご請求は、下記のお問い合わせ先にご連絡ください。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">7. プライバシーポリシーの変更について</h2>
							<p className="text-lg text-gray-700 mb-6">
								当サービスは、必要に応じて本ポリシーを変更することがあります。
								変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
								重要な変更がある場合は、ウェブサイト上でお知らせします。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">8. お問い合わせ先</h2>
							<p className="text-lg text-gray-700 mb-6">
								個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
							</p>
							<div className="bg-background p-6 rounded-lg">
								<p className="text-lg text-gray-700">
									<strong>シニアeスポーツ体験</strong><br />
									住所：〒150-0002 東京都渋谷区渋谷2-19-15 宮益坂ビルディング609<br />
									メール：info@marugoto-works.com<br />
									電話：090-8364-7759
								</p>
							</div>

							<p className="text-lg text-gray-700 mt-10 text-right">
								制定日：2023年10月1日<br />
								最終更新日：2025年3月24日
							</p>
						</div>

						<div className="mt-10 text-center">
							<Link
								href="/"
								className="inline-block bg-primary text-white py-3 px-8 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
							>
								トップページに戻る
							</Link>
						</div>
					</FadeInSection>
				</div>
			</section>

			<Footer />
		</main>
	);
}