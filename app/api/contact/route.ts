// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend APIキーの設定
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const { name, email, participants, message, preferredDate } = data;

		// 管理者宛メールの送信
		const adminEmailData = await resend.emails.send({
			from: 'シニアeスポーツ体験 <info@esports-sakura.jp>', // 認証済みドメインのアドレス
			to: 'info@marugoto-works.com', // 管理者のメールアドレス
			subject: '【シニアeスポーツ体験】無料体験のお申し込み',
			html: `
        <h2>シニアeスポーツ体験への申し込みがありました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>参加人数:</strong> ${participants}名</p>
        ${preferredDate ? `<p><strong>希望日時:</strong> ${preferredDate}</p>` : ''}
        ${message ? `<p><strong>メッセージ:</strong> ${message}</p>` : ''}
      `,
			reply_to: email,
		});

		// 申込者宛自動返信メールの送信
		const userEmailData = await resend.emails.send({
			from: 'シニアeスポーツ体験 <info@esports-sakura.jp>', // 認証済みドメインのアドレス
			to: email,
			subject: '【シニアeスポーツ体験】お申し込みありがとうございます',
			html: `
        <p>${name} 様</p>
        <p>シニアeスポーツ体験へのお申し込みありがとうございます。</p>
        <p>以下の内容でお申し込みを受け付けました。</p>
        <ul>
          <li><strong>参加人数:</strong> ${participants}名</li>
          ${preferredDate ? `<li><strong>希望日時:</strong> ${preferredDate}</li>` : ''}
          ${message ? `<li><strong>メッセージ:</strong> ${message}</li>` : ''}
        </ul>
        <p>折り返し、担当者よりご連絡させていただきます。</p>
        <p>お問い合わせは info@marugoto-works.com までお願いいたします。</p>
        <p>シニアeスポーツ体験</p>
      `,
		});

		return NextResponse.json({
			success: true,
			adminEmailId: adminEmailData.id,
			userEmailId: userEmailData.id
		});
	} catch (error) {
		console.error('メール送信エラー:', error);
		return NextResponse.json(
			{ success: false, error: 'メールの送信に失敗しました' },
			{ status: 500 }
		);
	}
}