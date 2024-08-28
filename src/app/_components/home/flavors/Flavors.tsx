import { CardFlavors } from '../../shared/cards/CardFlavors';
import { TypographyH2 } from '../../shared/typography';

export const Flavors = () => {
	return (
		<section className='flex items-center flex-col gap-8 py-10 relative px-8'>
			<div className='w-full h-60 bg-gray-100 absolute -z-10 top-0'></div>

			<TypographyH2 className='uppercase font-light'>
				/ sigue mis sabores
			</TypographyH2>

			<div className='w-full max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				<CardFlavors
					image='/flavors.jpg'
					describe='#freewebsite, #websitetemplate'
				/>

				<CardFlavors
					image='/flavors.jpg'
					describe='#freewebsite, #websitetemplate'
				/>

				<CardFlavors
					image='/flavors.jpg'
					describe='#freewebsite, #websitetemplate'
				/>

				<CardFlavors
					image='/flavors.jpg'
					describe='#freewebsite, #websitetemplate'
				/>

				<CardFlavors
					image='/flavors.jpg'
					describe='#freewebsite, #websitetemplate'
				/>
				
				<CardFlavors
					image='/flavors.jpg'
					describe='#freewebsite, #websitetemplate'
				/>
			</div>
		</section>
	);
};
