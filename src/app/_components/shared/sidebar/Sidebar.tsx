import { LogOut } from 'lucide-react';

import { SidebarLinks, SidebarHeader } from './';
import { TypographyH2 } from '../typography';
import { Button } from '../../ui/button';

export const Sidebar = () => {
	return (
		<aside
			className='bg-[#191F2F] text-white md:flex flex-col 
			gap-4 sticky hidden top-0 h-screen z-20'>
			<SidebarHeader />

			<hr className='border-[#acb1c0]' />

			<nav className='flex flex-col gap-2 h-full pb-5'>
				<header className='px-4 py-2'>
					<TypographyH2 className='uppercase text-base text-[#acb1c0]'>
						Menu
					</TypographyH2>
				</header>

				<div className='flex items-center flex-col justify-between h-full'>
					<SidebarLinks />

					<Button
						className='flex justify-start items-center hover:text-[#acb1c0] 
						gap-3 w-full text-base'
						variant='ghost'>
						<LogOut />
						Logout
					</Button>
				</div>
			</nav>
		</aside>
	);
};
