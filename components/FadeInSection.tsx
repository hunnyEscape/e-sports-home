// components/FadeInSection.tsx
'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInSectionProps {
	children: ReactNode;
	className?: string;
}

export default function FadeInSection({ children, className = '' }: FadeInSectionProps) {
	const [isVisible, setIsVisible] = useState(false);
	const domRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				setIsVisible(true);
				// 一度表示されたら監視を停止
				if (domRef.current) observer.unobserve(domRef.current);
			}
		});

		if (domRef.current) {
			observer.observe(domRef.current);
		}

		return () => {
			if (domRef.current) observer.unobserve(domRef.current);
		};
	}, []);

	return (
		<div
			ref={domRef}
			className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
		>
			{children}
		</div>
	);
}