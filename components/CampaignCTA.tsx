// components/CampaignCTA.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ContactFormInput } from '@/types';
// 注: types.tsに以下を追加する必要があります
// interface ContactFormInput {
//   name: string;
//   email: string;
//   message?: string;
//   participants: string;
// }

export default function CampaignCTA() {
	const [formData, setFormData] = useState<ContactFormInput>({
		name: '',
		email: '',
		message: '',
		participants: '1',
	});

	const [formErrors, setFormErrors] = useState<Partial<ContactFormInput>>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const validateForm = () => {
		const errors: Partial<ContactFormInput> = {};

		if (!formData.name.trim()) {
			errors.name = 'お名前は必須です';
		}

		if (!formData.email.trim()) {
			errors.email = 'メールアドレスは必須です';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = '正しいメールアドレスを入力してください';
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	// components/CampaignCTA.tsx の handleSubmit 関数を修正
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);

		try {
			// APIエンドポイントにフォームデータを送信
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (result.success) {
				// 送信成功時の処理
				setSubmitSuccess(true);
				setFormData({ name: '', email: '', message: '', participants: '1', preferredDate: '' });
			} else {
				// エラー時の処理
				console.error('送信エラー:', result.error);
				alert('送信に失敗しました。時間をおいて再度お試しください。');
			}
		} catch (error) {
			console.error('送信エラー:', error);
			alert('送信中にエラーが発生しました。時間をおいて再度お試しください。');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-2xl md:text-4xl font-bold text-gray-800 relative inline-block">
						まずは<span className="text-primary">体験</span>してみませんか？
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						初めての方も安心して楽しめる環境を整えています
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="bg-background-light rounded-xl overflow-hidden shadow-lg">
						<div className="md:flex">
							<div className="md:w-1/2 p-4 md:p-8">
								<h3 className="text-2xl font-bold text-gray-800 mb-1">
									無料体験会のご予約
								</h3>
								<p className="text-lg text-gray-700 mb-6">
									まずは気軽に体験してみてください。スタッフが丁寧にサポートします。
									友達と一緒に参加するとさらに楽しめます！
								</p>

								<div className="space-y-4">
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">日時</h4>
											<p className="text-gray-700">4月6日(日) 10時-12時<br />説明:15分、体験:45分、観覧・自由時間:60分</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">費用</h4>
											<p className="text-gray-700">無料</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">対象</h4>
											<p className="text-gray-700">60歳以上・先着12名</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">持ち物</h4>
											<p className="text-gray-700">特になし（メガネが必要な方はご持参ください）</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">集合場所</h4>
											<p className="text-gray-700">立川南口に9:45にお集まりください。会場へご案内します。</p>
										</div>
									</div>
									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">会場(立川駅南口徒歩5分)</h4>
											<p className="text-gray-700">立川市錦町1-4-4 サニービル2F(ファミリーマート立川錦町店の2階)</p>
										</div>
									</div>
								</div>
							</div>

							<div className="md:w-1/2 bg-primary p-8">
								{submitSuccess ? (
									<div className="h-full flex flex-col items-center justify-center text-white">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<h3 className="text-2xl font-bold mb-2">お申し込みありがとうございます</h3>
										<p className="text-lg text-center mb-6">
											ご予約内容を確認し、24時間以内にメールにてご連絡いたします。
										</p>
										<button
											onClick={() => setSubmitSuccess(false)}
											className="bg-white text-primary py-2 px-6 rounded-full font-bold hover:bg-secondary hover:text-white transition-all"
										>
											別の予約をする
										</button>
									</div>
								) : (
									<form onSubmit={handleSubmit} className="text-white">
										<h3 className="text-2xl font-bold mb-6">無料体験予約フォーム</h3>

										<div className="mb-4">
											<label htmlFor="name" className="block text-lg font-medium mb-1">
												お名前 <span className="text-secondary">*</span>
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="例：山田 太郎"
											/>
											{formErrors.name && (
												<p className="mt-1 text-secondary">{formErrors.name}</p>
											)}
										</div>

										<div className="mb-4">
											<label htmlFor="email" className="block text-lg font-medium mb-1">
												メールアドレス <span className="text-secondary">*</span>
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="例：example@email.com"
											/>
											{formErrors.email && (
												<p className="mt-1 text-secondary">{formErrors.email}</p>
											)}
										</div>

										<div className="mb-4">
											<label htmlFor="participants" className="block text-lg font-medium mb-1">
												参加人数 <span className="text-secondary">*</span>
											</label>
											<select
												id="participants"
												name="participants"
												value={formData.participants}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white [&>option]:text-black"
											>
												<option value="1">1名</option>
												<option value="2">2名</option>
												<option value="3">3名</option>
												<option value="4">4名</option>
												<option value="5">5名以上（詳細は備考欄に）</option>
											</select>
										</div>

										<div className="mb-6">
											<label htmlFor="message" className="block text-lg font-medium mb-1">
												ご質問など（任意）
											</label>
											<textarea
												id="message"
												name="message"
												value={formData.message || ''}
												onChange={handleChange}
												rows={3}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="ご質問やご要望があればお書きください"
											></textarea>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-secondary text-gray-800 py-3 px-6 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
										>
											{isSubmitting ? '送信中...' : '予約内容を送信する'}
										</button>

										<p className="mt-4 text-center text-white/80 text-sm">
											※ご入力いただいた情報は、体験予約のご連絡以外には使用いたしません。
										</p>
									</form>
								)}
							</div>
						</div>
					</div>
					<div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							その他のご予約方法
						</h3>

						<div className="flex flex-col md:flex-row justify-center items-center gap-6">
							{/* 電話での問い合わせ */}
							<a
								href="tel:09083647759"
								className="flex items-center justify-center bg-white text-primary border-2 border-primary py-3 px-6 rounded-full hover:bg-primary hover:text-white transition-all shadow-md w-full md:w-auto"
							>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
								<div>
									<span className="block font-bold">お電話でのご予約</span>
									<span className="text-xl">090-8364-7759（受付：13時～17時）</span>
								</div>
							</a>
							<a
								href="https://lin.ee/ab1kBIO"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center bg-white text-[#06C755] border-2 border-[#06C755] py-3 px-6 rounded-full hover:bg-[#06C755] hover:text-white transition-all shadow-md w-full md:w-auto"
							>
								<svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
									<path d="M19.365 9.89c.50 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91h-2.681a.91.91 0 01-.906-.91V10.8c0-.5.406-.91.906-.91h3.456zM13.64 14.088a.91.91 0 01.906.91v2.675a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-1.766h-2.45v1.766a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-2.675a.91.91 0 01.906-.91h4.262zm-7.265-4.198a.91.91 0 01.906.91v6.583a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-6.583a.91.91 0 01.906-.91zm13.265-1.073C20.947 8.817 22 9.87 22 11.177v6.839c0 1.308-1.053 2.36-2.36 2.36H4.36C3.053 20.376 2 19.324 2 18.016v-6.839c0-1.308 1.053-2.36 2.36-2.36h15.94z" />
								</svg>
								<div>
									<span className="block font-bold">公式LINEでのご予約</span>
									<span className="text-xl">24時間受付・お気軽にどうぞ</span>
								</div>
							</a>
						</div>

						<p className="text-center text-gray-600 mt-6">
							どちらの方法でもお気軽にお問い合わせください。<br />
							体験のご予約やご質問に丁寧にお答えいたします。
						</p>
					</div>
					<div className="mt-16" id="access">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							集合場所・会場の情報
						</h3>
						<div className="grid md:grid-cols-2 gap-6 mb-6">
							<div className="bg-background rounded-xl overflow-hidden shadow-lg">
								<div className="p-6">
									<h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										集合場所
									</h4>
									<div className="space-y-4">
										<div className="bg-white p-4 rounded-lg shadow-sm">
											<p className="text-lg font-medium text-gray-800">立川駅南口のデッキ案内図前 (2F)</p>
											<p className="text-gray-700">9:45に集合（時間厳守でお願いします）</p>
											<p className="text-gray-600 mt-2 text-sm">※担当スタッフが「シニアeスポーツ」のチラシを持ってお待ちしています</p>
										</div>
										<div className="bg-white p-4 rounded-lg shadow-sm">
											<p className="text-lg font-medium text-primary flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
												集合場所からのご案内
											</p>
											<p className="text-gray-700 mt-1">集合後、担当スタッフが会場まで皆様をご案内します。（徒歩約5分）</p>
										</div>
									</div>
									<div className="bg-gray-200 h-60 flex items-center justify-center mt-5 rounded-md overflow-hidden">
										<img
											src="/meeting-point.jpg"
											alt="立川駅南口の集合場所"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

							{/* カード2: 会場の情報 */}
							<div className="bg-background rounded-xl overflow-hidden shadow-lg">
								<div className="p-6">
									<h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
										</svg>
										会場情報
									</h4>
									<div className="space-y-4">
										<div className="bg-white p-4 rounded-lg shadow-sm">
											<p className="text-lg font-medium text-gray-800">立川市錦町1-4-4 サニービル2F</p>
											<p className="text-gray-700">ファミリーマート立川錦町店の2階</p>
											<p className="text-gray-700">JR「立川駅」南口より徒歩5分</p>
											<p className="text-gray-600 mt-2 text-sm">※建物入口に「シニアeスポーツ体験会」の案内表示があります</p>
										</div>

										<div className="bg-white p-4 rounded-lg shadow-sm">
											<p className="text-lg font-medium text-primary flex items-center">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
												開場時間
											</p>
											<p className="text-gray-700 mt-1">9:30〜 （受付開始は9:50から）</p>
										</div>
									</div>
									<div className="bg-gray-200 h-full flex items-center justify-center mt-5 rounded-md overflow-hidden">
										<img
											src="/vene-map.png"
											alt="会場の集合場所"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16 text-center">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							新しい楽しみを見つけませんか？
						</h3>
						<p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
							みなさまのお越しを心よりお待ちしております。<br />
							一緒に笑って、遊んで、新しい体験を楽しみましょう！
						</p>

						<Link
							href="#contact"
							className="inline-block bg-secondary text-gray-800 py-4 px-10 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
						>
							無料体験に申し込む
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}