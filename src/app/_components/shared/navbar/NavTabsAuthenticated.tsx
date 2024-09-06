'use client'

import { Avatar, AvatarFallback } from '../../ui/avatar';
import { FormatHelper } from '@/config/helpers';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../../ui/button';

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
