// components/Testimonials.tsx
import Image from 'next/image';
import { Testimonial } from '@/types';

// サンプルデータ
const testimonials: Testimonial[] = [
	{
		id: '1',
		name: '田中 幸子',
		age: 68,
		location: '東京都',
		image: '/images/testimonial-1.jpg', // 実際の画像パスに変更してください
		quote: '孫が『おばあちゃん上手！』って驚いてくれるんです。家族との話題が増えて、こんなに楽しいなんて思いませんでした。何より友達ができたのが嬉しいです。',
		benefits: ['孫との会話増加', '新しい交友関係', '記憶力向上'],
		highlight: '週2回・3ヶ月間継続中',
		rating: 5
	},
	{
		id: '2',
		name: '佐藤 健一',
		age: 72,
		location: '神奈川県',
		image: '/images/testimonial-2.jpg', // 実際の画像パスに変更してください
		quote: '最初は『私に出来るかな』と不安でしたが、スタッフが親切に教えてくれたおかげですぐに楽しめました。脳トレだと思って始めましたが、いつの間にか楽しみが増えて生活リズムが整いました。',
		benefits: ['生活リズム改善', '外出機会増加', '指先の器用さ向上'],
		highlight: '週1回・6ヶ月間継続中',
		rating: 5
	},
	{
		id: '3',
		name: '鈴木 美代子',
		age: 65,
		location: '埼玉県',
		image: '/images/testimonial-3.jpg', // 実際の画像パスに変更してください
		quote: '一人暮らしで話す相手が少なかったのですが、ここに来るようになってから毎週楽しみができました。みんなで一緒にゲームをするとあっという間に時間が過ぎていきます。',
		benefits: ['笑う機会の増加', '認知機能の維持', '新しい趣味の発見'],
		highlight: '週1回・4ヶ月間継続中',
		rating: 4
	}
];

// 星評価を表示するコンポーネント
const StarRating = ({ rating }: { rating: 1 | 2 | 3 | 4 | 5 }) => {
	return (
		<div className="flex text-secondary">
			{[...Array(5)].map((_, i) => (
				<svg
					key={i}
					className={`h-5 w-5 ${i < rating ? 'text-secondary' : 'text-gray-300'}`}
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
			))}
		</div>
	);
};

export default function Testimonials() {
	return (
		<section id="testimonials" className="py-16 bg-gradient-to-br from-background to-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
						<span className="text-primary">参加者の声</span>をご紹介
						<div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary opacity-70 transform -translate-y-2"></div>
					</h2>
					<p className="mt-4 text-xl text-gray-700">
						孫と遊べるようになった！新しい友達もできた！
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div key={testimonial.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
							<div className="p-6">
								<div className="flex items-center mb-4">
									<div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
										{/* 画像がある場合はImageコンポーネントを使用 */}
										<div className="w-full h-full flex items-center justify-center text-gray-400">
											写真
										</div>
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-800">{testimonial.name}さん</h3>
										<p className="text-gray-600">{testimonial.age}歳・{testimonial.location}</p>
									</div>
								</div>

								<div className="mb-4">
									<StarRating rating={testimonial.rating} />

									<p className="mt-2 text-lg text-gray-700 italic">
										「{testimonial.quote}」
									</p>
								</div>

								<div className="bg-background-light rounded-lg p-4">
									<h4 className="text-lg font-semibold text-gray-800 mb-2">参加してよかったこと</h4>
									<div className="flex flex-wrap gap-2">
										{testimonial.benefits.map((benefit, index) => (
											<span key={index} className="inline-block bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
												{benefit}
											</span>
										))}
									</div>
								</div>
							</div>

							<div className="p-4 bg-primary bg-opacity-10">
								<div className="flex items-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<p className="text-primary font-medium">
										{testimonial.highlight}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
					<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
						あなたも新しい楽しみを見つけませんか？
					</h3>
					<p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
						年齢や経験に関係なく、誰でも楽しめる場所です。<br />
						まずは気軽に体験してみてください。
					</p>
					<div className="text-center">
						<a
							href="/cv"
							className="inline-block bg-secondary text-gray-800 py-3 px-8 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
						>
							無料体験に申し込む
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}