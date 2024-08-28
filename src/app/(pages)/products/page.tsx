import { CardShop } from '@/app/_components/shared/cards/CardShop';
import { TypographyH1 } from '@/app/_components/shared/typography';

const page = () => {
	return (
		<section className='flex items-center flex-col gap-8'>
			<TypographyH1 className='font-light'>/ ELIGE TUS GALLETAS</TypographyH1>

			<div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
				<CardShop
					id='123123'
					images={['/product.webp', '/product-variant-2.webp']}
					name='Copos de avena'
					price={20}
					isNovelty={false}
				/>

				<CardShop
					id='123123'
					images={['/product.webp', '/product-variant-2.webp']}
					name='Copos de avena'
					price={20}
					isNovelty={false}
				/>

				<CardShop
					id='123123'
					images={['/product.webp', '/product-variant-2.webp']}
					name='Copos de avena'
					price={20}
					isNovelty={false}
				/>

				<CardShop
					id='123123'
					images={['/product.webp', '/product-variant-2.webp']}
					name='Copos de avena'
					price={20}
					isNovelty={false}
				/>

				<CardShop
					id='123123'
					images={['/product.webp', '/product-variant-2.webp']}
					name='Copos de avena'
					price={20}
					isNovelty={false}
				/>

				<CardShop
					id='123123'
					images={['/product.webp', '/product-variant-2.webp']}
					name='Copos de avena'
					price={20}
					isNovelty={false}
				/>
			</div>
		</section>
	);
};

export default page;
