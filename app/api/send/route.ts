// app/api/send/route.ts
import { resend } from '@/lib/resend';
export async function POST(req: Request) {
	const { email, name } = await req.json();
	const { error } = await resend.emails.send({
		from: 'info@esports-sakura.jp',
		to: email,
		subject: 'お問い合わせありがとうございます',
		html: `<p>${name} 様、お問い合わせを受け付けました。</p>`,
	});
	if (error) {
		return Response.json({ error }, { status: 500 });
	}
	return Response.json({ success: true });
}
