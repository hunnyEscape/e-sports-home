// components/ContactCTA.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ContactFormInput } from '@/types';

export default function ContactCTA() {
	const [formData, setFormData] = useState<ContactFormInput>({
		name: '',
		email: '',
		message: '',
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);

		// ここに実際のフォーム送信処理を追加
		// 仮の非同期処理（本番では実際のAPIエンドポイントにPOSTする）
		try {
			await new Promise(resolve => setTimeout(resolve, 1000));
			setSubmitSuccess(true);
			setFormData({ name: '', email: '', message: '', preferredDate: '' });
		} catch (error) {
			console.error('送信エラー:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
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
							<div className="md:w-1/2 p-8">
								<h3 className="text-2xl font-bold text-gray-800 mb-4">
									無料体験のご予約
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
											<h4 className="text-xl font-semibold text-gray-800">所要時間</h4>
											<p className="text-gray-700">約60分（説明15分・体験30分・質問15分）</p>
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
											<p className="text-gray-700">無料（ドリンク1杯サービス付き）</p>
										</div>
									</div>

									<div className="flex items-start">
										<div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mt-1">
											<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
											</svg>
										</div>
										<div className="ml-4">
											<h4 className="text-xl font-semibold text-gray-800">持ち物</h4>
											<p className="text-gray-700">特になし（メガネが必要な方はご持参ください）</p>
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
											<label htmlFor="preferredDate" className="block text-lg font-medium mb-1">
												ご希望日時（任意）
											</label>
											<input
												type="text"
												id="preferredDate"
												name="preferredDate"
												value={formData.preferredDate || ''}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
												placeholder="例：○月○日 午後希望"
											/>
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
											{isSubmitting ? '送信中...' : '無料体験に申し込む（3分で完了）'}
										</button>

										<p className="mt-4 text-center text-white/80 text-sm">
											※ご入力いただいた情報は、体験予約のご連絡以外には使用いたしません。
										</p>
									</form>
								)}
							</div>
						</div>
					</div>

					<div className="mt-16">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							アクセス情報
						</h3>

						<div className="md:flex shadow-lg rounded-xl overflow-hidden">
							<div className="md:w-1/2 p-8 bg-background">
								<h4 className="text-xl font-semibold text-gray-800 mb-4">シニアeスポーツ体験スペース</h4>

								<div className="space-y-3 text-lg">
									<p className="flex items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										〒100-0001<br />
										東京都千代田区千代田1-1<br />
										千代田ビル3F
									</p>

									<p className="flex items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
										03-1234-5678
									</p>

									<p className="flex items-start">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										info@senior-esports.example.com
									</p>
								</div>

								<div className="mt-6">
									<h5 className="text-lg font-semibold text-gray-800 mb-2">交通アクセス</h5>
									<ul className="space-y-2 text-lg text-gray-700">
										<li>• 東京メトロ丸ノ内線「東京駅」より徒歩5分</li>
										<li>• JR「東京駅」八重洲口より徒歩7分</li>
										<li>• 都営バス「千代田一丁目」停留所より徒歩1分</li>
									</ul>
								</div>

								<div className="mt-6 flex justify-center">
									<Link
										href="https://lin.ee/yourlineid"
										target="_blank"
										className="flex items-center bg-white text-primary py-3 px-6 rounded-full hover:bg-secondary hover:text-white transition-all shadow-md"
									>
										<svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
											<path d="M19.365 9.89c.50 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91H17.59v1.683h1.775c.5 0 .906.41.906.91s-.406.91-.906.91h-2.681a.91.91 0 01-.906-.91V10.8c0-.5.406-.91.906-.91h3.456zM13.64 14.088a.91.91 0 01.906.91v2.675a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-1.766h-2.45v1.766a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-2.675a.91.91 0 01.906-.91h4.262zm-7.265-4.198a.91.91 0 01.906.91v6.583a.91.91 0 01-.906.91.91.91 0 01-.906-.91v-6.583a.91.91 0 01.906-.91zm13.265-1.073C20.947 8.817 22 9.87 22 11.177v6.839c0 1.308-1.053 2.36-2.36 2.36H4.36C3.053 20.376 2 19.324 2 18.016v-6.839c0-1.308 1.053-2.36 2.36-2.36h15.94z" />
										</svg>
										LINEでお問い合わせ
									</Link>
								</div>
							</div>

							<div className="md:w-1/2">
								<div className="bg-gray-200 h-full min-h-[300px] flex items-center justify-center">
									<p className="text-gray-500 text-lg">ここに地図が表示されます</p>
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
							href="/cv"
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