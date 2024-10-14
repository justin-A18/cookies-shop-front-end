import { Cookie } from 'lucide-react';
import { TypographyH2, TypographyP } from '../typography';

export const SidebarHeader = () => {
	return (
		<header className='p-4 flex items-center gap-4'>
			<Cookie className='size-7' />

			<div className='space-y-1'>
				<TypographyH2 className='text-xl'>Cookies</TypographyH2>
				<TypographyP className='text-[#acb1c0]'>
					Gestion de la tienda
				</TypographyP>
			</div>
		</header>
	);
};
