import { TypographyH4 } from '../typography';

interface Props {
	image: string;
	describe: string;
}

export const CardFlavors = ({ image, describe }: Props) => {
	return (
		<article className='relative group cursor-zoom-in'>
			<img
				src={image}
				alt='flavors'
			/>

			<div
				className='absolute w-full h-full bg-black/30 top-0 flex 
				items-center justify-center text-center p-4 invisible opacity-0
				group-hover:visible group-hover:opacity-100 transition-all
				duration-500'>
				<TypographyH4 className='uppercase text-white'>{describe}</TypographyH4>
			</div>
		</article>
	);
};
