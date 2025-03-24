// app/terms/page.tsx
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

export default function TermsPage() {
	return (
		<main className="min-h-screen">
			<Header />

			<section className="pt-32 pb-16 bg-gradient-to-br from-white via-background to-background-light">
				<div className="container mx-auto px-4 max-w-4xl">
					<FadeInSection>
						<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
							利用規約
						</h1>

						<div className="bg-white rounded-xl p-8 shadow-md">
							<p className="text-lg text-gray-700 mb-6">
								この利用規約（以下、「本規約」）は、シニアeスポーツ体験（以下、「当サービス」）の利用条件を定めるものです。
								ご利用されるお客様（以下、「利用者」）には、本規約に同意したうえで当サービスをご利用いただきます。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第1条（適用範囲）</h2>
							<p className="text-lg text-gray-700 mb-6">
								本規約は、当サービスの提供するeスポーツ体験会、イベント、その他関連するサービスの利用に関して適用されます。
								利用者は本規約に同意したうえで、当サービスを利用するものとします。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第2条（利用資格）</h2>
							<div className="text-lg text-gray-700 mb-6">
								<p className="mb-4">当サービスは、原則として以下の条件を満たす方を対象としています：</p>
								<ul className="list-disc pl-8 space-y-2">
									<li>60歳以上の方（特定のイベントでは年齢制限が異なる場合があります）</li>
									<li>本規約に同意いただける方</li>
									<li>自力で施設に来場できる方</li>
									<li>係員の指示に従っていただける方</li>
								</ul>
								<p className="mt-4">
									なお、以下の場合には、利用をお断りする場合がございます：
								</p>
								<ul className="list-disc pl-8 space-y-2 mt-2">
									<li>当サービスの趣旨に反する行為をされた方</li>
									<li>他の利用者や係員に対して迷惑行為を行った方</li>
									<li>本規約に違反した方</li>
									<li>その他、当サービスの運営に支障をきたすと判断した場合</li>
								</ul>
							</div>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第3条（予約・キャンセル）</h2>
							<div className="text-lg text-gray-700 mb-6">
								<ol className="list-decimal pl-8 space-y-2">
									<li>当サービスのご利用には、原則として事前予約が必要です。</li>
									<li>予約方法は、ウェブサイト、電話、またはLINEにてお申し込みください。</li>
									<li>予約のキャンセルは、利用日の前日までにご連絡ください。</li>
									<li>当日キャンセルや無断キャンセルが繰り返される場合、今後のご利用をお断りすることがあります。</li>
								</ol>
							</div>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第4条（料金・支払い）</h2>
							<div className="text-lg text-gray-700 mb-6">
								<ol className="list-decimal pl-8 space-y-2">
									<li>初回体験は原則として無料です。</li>
									<li>料金は、当サービスのウェブサイトやパンフレットに記載された金額とします。</li>
									<li>料金は、サービス利用時に現金でお支払いください。</li>
									<li>料金は予告なく変更される場合があります。変更の際は、事前にウェブサイト等でお知らせします。</li>
								</ol>
							</div>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第5条（健康上の配慮）</h2>
							<div className="text-lg text-gray-700 mb-6">
								<ol className="list-decimal pl-8 space-y-2">
									<li>利用者は、自身の健康状態を考慮した上で、自己責任において当サービスをご利用ください。</li>
									<li>体調不良を感じた場合は、直ちに係員にお申し出ください。</li>
									<li>めまい、頭痛、吐き気、極度の疲労感など体調に異変を感じた場合は、すぐにゲームを中止してください。</li>
									<li>持病のある方は、事前に医師に相談することをお勧めします。</li>
								</ol>
							</div>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第6条（施設利用上の注意）</h2>
							<div className="text-lg text-gray-700 mb-6">
								<ol className="list-decimal pl-8 space-y-2">
									<li>施設内では係員の指示に従ってください。</li>
									<li>他の利用者の迷惑となる行為はお控えください。</li>
									<li>施設の設備・機器は丁寧に扱い、故意に損傷させた場合は修理費用をご負担いただく場合があります。</li>
									<li>飲食は指定されたエリアでのみ可能です。</li>
									<li>貴重品は各自で管理してください。紛失・盗難について、当サービスは責任を負いません。</li>
								</ol>
							</div>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第7条（禁止事項）</h2>
							<div className="text-lg text-gray-700 mb-6">
								<p className="mb-4">利用者は、以下の行為を行ってはならないものとします：</p>
								<ol className="list-decimal pl-8 space-y-2">
									<li>他の利用者や係員に対する暴言、暴力、ハラスメント行為</li>
									<li>施設・設備・機器の損壊行為</li>
									<li>許可なく施設内で写真撮影や録音・録画を行う行為</li>
									<li>政治活動、宗教活動、勧誘活動</li>
									<li>営利目的での利用</li>
									<li>その他、当サービスの円滑な運営を妨げる行為</li>
								</ol>
							</div>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第8条（写真・動画の撮影・公開）</h2>
							<p className="text-lg text-gray-700 mb-6">
								当サービスでは、活動の様子を写真や動画で撮影し、ウェブサイトやSNS等で公開することがあります。
								撮影を希望されない方は、事前に係員にお申し出ください。
								また、すでに公開された写真・動画について削除をご希望の場合は、お問い合わせ先までご連絡ください。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第9条（免責事項）</h2>
							<div className="text-lg text-gray-700 mb-6">
								<ol className="list-decimal pl-8 space-y-2">
									<li>当サービスの利用中に生じた怪我、体調不良等については、当サービスに故意または重大な過失がある場合を除き、責任を負いません。</li>
									<li>利用者同士のトラブルについては、当事者間で解決するものとし、当サービスは責任を負いません。</li>
									<li>不可抗力（地震、台風、火災等の自然災害、感染症の流行、政府または自治体の要請等）により当サービスの提供ができない場合、責任を負いません。</li>
								</ol>
							</div>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第10条（規約の変更）</h2>
							<p className="text-lg text-gray-700 mb-6">
								当サービスは、必要に応じて本規約を変更することがあります。
								変更後の規約は、当ウェブサイトに掲載した時点から効力を生じるものとします。
								重要な変更がある場合は、ウェブサイト上でお知らせします。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">第11条（準拠法・管轄裁判所）</h2>
							<p className="text-lg text-gray-700 mb-6">
								本規約の解釈にあたっては、日本法を準拠法とします。
								当サービスと利用者との間で紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
							</p>

							<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">お問い合わせ先</h2>
							<p className="text-lg text-gray-700 mb-6">
								本規約に関するお問い合わせは、下記までご連絡ください。
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