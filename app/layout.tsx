// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'シニアeスポーツ体験 | 60歳からの新しい楽しみ',
  description: '笑って、遊んで、ちょっと若返る。シニア向けeスポーツ体験スペースで認知症予防、交流促進、楽しい時間を過ごしましょう。初めての方でも安心して楽しめます。',
  keywords: 'シニア, eスポーツ, 高齢者, ゲーム, 認知症予防, 脳トレ, 交流, 健康',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}