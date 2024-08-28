import Link from 'next/link';
import { TypographyH1 } from '../../shared/typography';

export const SliderInfo = () => {
	return (
		<div
			className='absolute left-1/2 -translate-x-1/2 sm:-translate-x-0 
			sm:left-10 top-1/2 -translate-y-1/2 w-full'>
			<div className='flex items-center sm:items-start flex-col gap-4'>
				<TypographyH1 className='flex flex-col gap-2'>
					<span className='text-4xl md:text-5xl text-white'>
						100% NATURALES.
					</span>
					<span className='text-4xl md:text-5xl text-white'>
						GALLETAS CASERAS
					</span>
					<span className='text-4xl md:text-5xl text-white'>
						Y RECIÉN HECHAS
					</span>
				</TypographyH1>

				<Link
					href='/products'
					className='bg-white px-4 py-3 
					rounded-md hover:bg-white/80 
					transition-colors duration-500'>
					Ver productos
				</Link>
			</div>
		</div>
	);
};
