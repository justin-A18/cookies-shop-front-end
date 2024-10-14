'use client';

import Link from 'next/link';
import { navLinksAdmin } from '@/config/const';
import { usePathname } from 'next/navigation';

export const SidebarLinks = () => {
	const pathname = usePathname();

	return (
		<ul className='w-full'>
			{navLinksAdmin.map(({ id, label, href, icon }) => (
				<li
					key={id}
					className={`${
						pathname === href ? 'bg-white/20 text-white' : 'text-[#acb1c0]'
					} p-4 hover:bg-white/10 hover:text-white transition-all 
						duration-300 font-medium backdrop-blur-lg`}>
					<Link
						href={href}
						className='flex items-center gap-2'>
						{icon}
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
};
