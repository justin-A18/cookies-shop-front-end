'use client';

import {
	CheckCircledIcon,
	ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import { Alert, AlertDescription } from '../../ui/alert';
import { cn } from '@/app/_lib/utils';
import { useEffect, useState } from 'react';

interface Props {
	className?: string;
	children: React.ReactNode;
	variant?: 'default' | 'destructive' | 'success';
}

export const CustomAlert = ({ children, className, variant }: Props) => {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setHidden(true);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [hidden]);

	return (
		<Alert
			variant={variant}
			hidden={hidden}>
			<AlertDescription className={cn('flex items-center gap-4', className)}>
				{variant === 'destructive' ? (
					<ExclamationTriangleIcon className='size-6' />
				) : (
					<CheckCircledIcon className='size-6' />
				)}

				{children}
			</AlertDescription>
		</Alert>
	);
};
