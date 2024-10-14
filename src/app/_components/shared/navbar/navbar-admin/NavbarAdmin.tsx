import { ChevronDown, CookieIcon, Menu } from 'lucide-react';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/app/_components/ui/avatar';
import { Button, buttonVariants } from '@/app/_components/ui/button';
import { TypographyH3 } from '../../typography';
import Link from 'next/link';

export const NavbarAdmin = () => {
	return (
		<header className='bg-white px-4 md:px-10 py-4 flex items-center justify-between'>
			<TypographyH3 className='text-xl text-gray-900 hidden md:block'>
				Bienvenido, Justin 👋
			</TypographyH3>

			<Link
				href='/admin'
				className={buttonVariants({
					variant: 'ghost',
					size: 'icon',
					className: 'md:hidden',
				})}>
				<CookieIcon className='size-8 text-[#191F2F]' />
			</Link>

			<div className='flex items-center gap-4'>
				<Avatar className='size-9'>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>

				<ChevronDown className='size-4' />
			</div>
		</header>
	);
};
