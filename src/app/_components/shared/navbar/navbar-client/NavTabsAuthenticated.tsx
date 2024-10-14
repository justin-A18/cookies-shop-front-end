'use client'

import { Button } from '@/app/_components/ui/button';
import { Avatar, AvatarFallback } from '@/app/_components/ui/avatar';
import { FormatHelper } from '@/config/helpers';
import { ShoppingCart } from 'lucide-react';

export const NavTabsAuthenticated = ({username}: {username: string}) => {
	return (
		<div className='flex items-center gap-3'>
			<Button
				variant='ghost'
				size='icon'>
				<Avatar>
					<AvatarFallback>{FormatHelper.getInitials(username)}</AvatarFallback>
				</Avatar>
			</Button>

			<Button
				variant='ghost'
				size='icon'>
				<ShoppingCart className='size-6' />
			</Button>
		</div>
	);
};
