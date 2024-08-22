import { cn } from '@/app/_lib/utils';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export function TypographyP({ children, className }: Props) {
	return (
		<p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
			{children}
		</p>
	);
}
