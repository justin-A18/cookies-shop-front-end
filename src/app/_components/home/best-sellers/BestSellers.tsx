import Link from 'next/link';
import { CardBestSellers } from '../../shared/cards/CardBestSellers';
import { TypographyH2 } from '../../shared/typography';

export const BestSellers = () => {
	return (
		<section className='flex items-center flex-col gap-8 px-4 py-8'>
			<TypographyH2 className='font-light'>/ MÁS VENDIDAS</TypographyH2>

			<div className='max-w-5xl grid gap-4 md:grid-cols-3'>
				<CardBestSellers
					id='12312312'
					name='Copos de avena'
					price={20}
					isNovelty={false}
					image='/product.webp'
				/>

				<CardBestSellers
					id='12312312'
					name='Copos de avena'
					price={20.0}
					isNovelty={true}
					image='/product.webp'
				/>

				<CardBestSellers
					id='12312312'
					name='Copos de avena'
					price={20.0}
					isNovelty={false}
					image='/product.webp'
				/>
			</div>

			<footer className='w-full h-10'>
				<div
					className='flex items-center justify-center relative 
				before:content-[""] before:w-full before:h-0.5 before:bg-black
				before:absolute before:top-5'>
					<Link
						href='/products'
						className='bg-white z-10 px-6 py-2
					border border-black hover:bg-black hover:text-white
					transition-colors duration-500 font-light uppercase text-sm'>
						Ver todos
					</Link>
				</div>
			</footer>
		</section>
	);
};
