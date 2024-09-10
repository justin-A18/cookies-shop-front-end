import Link from 'next/link';
import { X } from 'lucide-react';

import { Button } from '../../ui/button';

const navLinks = [
	{
		id: 1,
		label: 'Inicio',
		href: '/',
	},
	{
		id: 2,
		label: 'Explorar',
		href: '/explore',
	},
	{
		id: 3,
		label: 'Productos',
		href: '/products',
	},
	{
		id: 4,
		label: 'Sobre nosotros',
		href: '/about-us',
	}
];

export const NavLinks = ({
	isOpen,
	closeMenu,
}: {
	isOpen: boolean;
	closeMenu: () => void;
}) => {
	return (
		<ul
			className={`fixed top-0 left-0 w-full bg-white h-full flex-col 
			justify-center text-3xl uppercase ${
				!isOpen
					? '-translate-y-[40rem] opacity-0 invisible'
					: '-translate-y-0 opacity-100 visible'
			} 
			md:text-base md:relative flex md:flex-row md:justify-normal items-center
			gap-5 md:capitalize md:w-auto md:-translate-y-0 md:opacity-100 md:visible 
			transition-all duration-500 z-20`}>
			<Button
				variant='ghost'
				onClick={closeMenu}
				size='icon'
				className='absolute top-4 right-4 md:hidden'>
				<X className='size-10' />
			</Button>

			{navLinks.map(({ id, label, href }) => (
				<li
					key={id}
					onClick={closeMenu}
					className='font-medium relative before:content-[""] before:w-full before:h-0.5 before:absolute before:-bottom-1 before:scale-0 before:bg-black before:transition-all before:duration-500 before:hover:scale-100 before:origin-left italic md:not-italic'>
					<Link href={href}>{label}</Link>
				</li>
			))}
		</ul>
	);
};
