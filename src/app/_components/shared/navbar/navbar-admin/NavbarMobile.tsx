import { Button } from '@/app/_components/ui/button';
import { navLinksAdmin } from '@/config/const';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '../../tooltip/Tooltip';

export const NavbarMobile = () => {
	return (
		<div className='fixed w-full mx-auto bottom-0 block md:hidden'>
			<nav className='bg-slate-200 max-w-xl mx-auto px-4 py-2 rounded-md'>
				<ul className='flex items-center justify-between'>
					{navLinksAdmin.map(({ id, href, icon, label }) => (
						<li
							key={id}
							className='p-3 hover:bg-slate-300/50 transition-all 
							duration-300 rounded-full relative group'>
							<Tooltip>{label}</Tooltip>
							<Link href={href}>{icon}</Link>
						</li>
					))}

					<li
						className='hover:bg-slate-300/50 transition-all 
						duration-300 p-1.5 rounded-full relative group'>
						<Tooltip>Logout</Tooltip>
						<Button
							size='icon'
							variant='ghost'>
							<LogOut />
						</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
};
