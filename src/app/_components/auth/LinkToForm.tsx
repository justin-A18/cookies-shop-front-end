import { cn } from '@/app/_lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
	text: string;
	to: string;
	className?: string;
}

export const LinkToForm = ({ text, to, className }: Props) => {
	return (
		<div className={cn('text-sm font-medium text-blue-500', className)}>
			<Link href={to}>{text}</Link>
		</div>
	);
};
