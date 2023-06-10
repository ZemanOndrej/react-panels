export const CloseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
	return (
		<button
			{...props}
			type="button"
			className="transparent rounded-md p-2 inline-flex items-center justify-center hover:bg-slate-800 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
			<span className="sr-only">Close Panel</span>
			<svg
				className="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	);
};
