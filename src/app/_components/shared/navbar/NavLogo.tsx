import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Button } from '../../ui/button';

export const NavLogo = ({ toggle }: { toggle: () => void }) => {
	return (
		<div className='flex items-center gap-3'>
			<Button
				variant='ghost'
				size='icon'
				onClick={toggle}
				className='md:hidden'>
				<HamburgerMenuIcon className='size-8' />
			</Button>

			<Link href='/' className='flex items-center gap-2'>
				<img
					className='size-8'
					src='/favicon.svg'
					alt='logo'
				/>

				<span className='font-bold text-2xl hidden md:block'>Cookies</span>
			</Link>
		</div>
	);
};
