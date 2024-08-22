import { cn } from '@/app/_lib/utils';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export function TypographyH4({ children, className }: Props) {
	return (
		<h4
			className={cn(
				'scroll-m-20 text-xl font-semibold tracking-tight',
				className,
			)}>
			{children}
		</h4>
	);
}
