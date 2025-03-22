// components/SmoothScroll.tsx
'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
	useEffect(() => {
		// 内部リンク（#で始まるリンク）のクリックイベントをキャプチャ
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a');

			if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
				e.preventDefault();

				const targetId = anchor.hash.slice(1);
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					// ヘッダーの高さを考慮したスクロール位置の計算
					const headerHeight = 80; // ヘッダーの高さをピクセルで指定
					const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth'
					});

					// URLをハッシュ付きに更新（履歴に残さない）
					history.replaceState(null, '', anchor.hash);
				}
			}
		};

		document.addEventListener('click', handleAnchorClick);

		return () => {
			document.removeEventListener('click', handleAnchorClick);
		};
	}, []);

	return null;
}