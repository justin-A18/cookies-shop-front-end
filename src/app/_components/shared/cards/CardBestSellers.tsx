import Link from 'next/link';

import { TypographyH4, TypographyP } from '../typography';
import { Card, CardContent } from '../../ui/card';
import { FormatHelper } from '@/config/helpers';

interface CookieProps {
	id: string;
	name: string;
	price: number;
	image: string;
	isNovelty: boolean;
}

export const CardBestSellers = ({
	id,
	image,
	name,
	price,
	isNovelty,
}: CookieProps) => {
	return (
		<Card
			className='border-0 shadow-none flex flex-col 
			items-center gap-4 relative group cursor-pointer'>
			<img
				className='w-full block'
				src={image}
				alt='product'
			/>

			{isNovelty && (
				<span
					className='text-xs uppercase text-white 
			bg-fuchsia-950 px-4 py-2 top-0 left-0 absolute'>
					Novedad
				</span>
			)}

			<CardContent className='text-center relative w-full'>
				<div
					className='group-hover:invisible group-hover:opacity-0 
					transition-all duration-500 space-y-2'>
					<TypographyH4 className='font-light uppercase text-base'>
						{name}
					</TypographyH4>
					<TypographyP className='text-sm'>{FormatHelper.formatPrice(price)}</TypographyP>
				</div>

				<Link
					href={`/products/${id}`}
					className='text-sm absolute top-2 left-1/2 -translate-x-1/2 
					invisible opacity-0 group-hover:visible group-hover:opacity-100
					transition-all duration-500 text-fuchsia-950'>
					Ver detalles
				</Link>
			</CardContent>
		</Card>
	);
};
