import Link from 'next/link';

import { TypographyH4, TypographyP } from '../typography';
import { Card, CardContent } from '../../ui/card';
import { ArrayHelpers, FormatHelper } from '@/config/helpers';

interface CookieProps {
	id: string;
	name: string;
	price: number;
	images: string[];
	isNovelty: boolean;
}

export const CardShop = ({
	id,
	images,
	name,
	price,
	isNovelty,
}: CookieProps) => {
	const image = ArrayHelpers.ArrayToObject<string>(images);

	return (
		<Card
			className='border-0 shadow-none flex flex-col 
			items-center gap-4 relative group cursor-pointer'>
			<div className='w-full relative group overflow-hidden'>
				<img
					className='w-full block group-hover:hidden'
					src={image.item1}
					alt='product'
				/>

				<img
					className='w-full hidden group-hover:block'
					src={image.item2}
					alt='product'
				/>

				<span
				className='w-full text-sm absolute bottom-0 left-0 p-4 
				text-center bg-white/60 backdrop-blur-sm translate-y-16
				opacity-0 invisible group-hover:opacity-100 group-hover:visible 
				group-hover:translate-y-0 transition-all duration-500'>
					Vista rápida
				</span>
			</div>

			{isNovelty && (
				<span
					className='text-xs uppercase text-white 
			bg-fuchsia-950 px-4 py-2 top-0 left-0 absolute'>
					Novedad
				</span>
			)}

			<CardContent className='text-center flex flex-col gap-2 w-full px-0'>
				<div className='space-y-2'>
					<TypographyH4 className='font-light uppercase text-base'>
						{name}
					</TypographyH4>
					<TypographyP className='text-sm'>
						{FormatHelper.formatPrice(price)}
					</TypographyP>
				</div>

				<Link
					href={`/products/${id}`}
					className='text-sm bg-fuchsia-950 hover:bg-fuchsia-950/70 
					text-white py-2 font-light w-full transition-colors duration-500'>
					Agregar al carrito
				</Link>
			</CardContent>
		</Card>
	);
};
