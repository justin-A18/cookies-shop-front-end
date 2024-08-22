import { cn } from '@/app/_lib/utils';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export function TypographyH1({ children, className }: Props) {
	return (
		<h1
			className={cn(
				'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
				className,
			)}>
			{children}
		</h1>
	);
}
