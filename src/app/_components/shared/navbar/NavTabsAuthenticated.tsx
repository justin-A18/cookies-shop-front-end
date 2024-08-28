import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../../ui/button';

export const NavTabsAuthenticated = () => {
	return (
		<div className='flex items-center gap-3'>
			<Button
				variant='ghost'
				size='icon'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
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
