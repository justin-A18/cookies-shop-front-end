import { cn } from '@/app/_lib/utils';
import { Button, buttonVariants } from '../../ui/button';
import { VariantProps } from 'class-variance-authority';
import { Loader } from '../loaders';

interface Props
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading: boolean;
	className?: string;
	children: React.ReactNode;
}

export const LoadingButton = ({
	isLoading,
	children,
	className,
	...props
}: Props) => {
	return (
		<Button
			className={cn('w-full font-semibold text-base flex items-center gap-4', className)}
			disabled={isLoading}
			{...props}>
			{children} {isLoading && <Loader />}
		</Button>
	);
};
