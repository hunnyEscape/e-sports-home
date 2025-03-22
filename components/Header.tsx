// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
	{ label: 'ホーム', href: '/' },
	{ label: '体験内容', href: '#experience' },
	{ label: '料金・時間', href: '#pricing' },
	{ label: 'よくある質問', href: '#faq' },
	{ label: 'お問い合わせ', href: '#contact' },
	{ label: '無料体験予約', href: '/cv', isButton: true },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	// スクロールに応じてヘッダーを表示/非表示
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			setVisible(
				(prevScrollPos > currentScrollPos) ||
				currentScrollPos < 10 ||
				isOpen
			);

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, isOpen]);

	return (
		<header
			className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${visible ? 'translate-y-0' : '-translate-y-full'
				}`}
		>
			<div className="container mx-auto px-4 py-3 md:py-4">
				<div className="flex justify-between items-center">
					{/* ロゴ */}
					<Link href="/" className="flex items-center">
						<span className="text-2xl font-bold text-primary">シニア<span className="text-secondary">e</span>スポーツ体験</span>
					</Link>

					{/* デスクトップナビゲーション */}
					<nav className="hidden md:flex items-center space-x-8">
						{navItems.map((item) =>
							item.isButton ? (
								<Link
									key={item.href}
									href={item.href}
									className="bg-secondary text-gray-800 py-2 px-6 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
								>
									{item.label}
								</Link>
							) : (
								<Link
									key={item.href}
									href={item.href}
									className="text-lg font-medium text-gray-800 hover:text-primary"
								>
									{item.label}
								</Link>
							)
						)}
					</nav>

					{/* モバイルメニューボタン */}
					<button
						className="md:hidden text-gray-800 focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
					>
						{isOpen ? (
							<X className="h-8 w-8" />
						) : (
							<Menu className="h-8 w-8" />
						)}
					</button>
				</div>

				{/* モバイルナビゲーション */}
				{isOpen && (
					<div className="md:hidden pt-4 pb-2">
						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={`text-xl font-medium py-2 ${item.isButton
											? "bg-secondary text-gray-800 py-3 px-6 rounded-full text-center font-bold hover:bg-opacity-90 transition-all shadow-md"
											: "text-gray-800 hover:text-primary"
										}`}
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</Link>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}