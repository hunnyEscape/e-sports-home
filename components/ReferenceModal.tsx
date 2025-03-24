import { useEffect } from 'react';

export default function ReferenceModal({
	isOpen,
	onClose,
	references
}: {
	isOpen: boolean;
	onClose: () => void;
	references: string[];
}) {
	useEffect(() => {
		if (!isOpen) return;

		// スクロール禁止
		document.body.style.overflow = 'hidden';

		// Escapeキーで閉じる処理
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleEsc);

		return () => {
			// スクロール解除
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleEsc);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg max-w-2xl w-full shadow-lg relative">
				<h2 className="text-xl font-bold mb-4">参考文献</h2>
				<ol className="space-y-2 text-sm text-gray-700 max-h-[60vh] overflow-y-auto pr-2">
					{references.map((ref, idx) => (
						<li key={idx}>{ref}</li>
					))}
				</ol>
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
					aria-label="Close modal"
				>
					✕
				</button>
			</div>
		</div>
	);
}
