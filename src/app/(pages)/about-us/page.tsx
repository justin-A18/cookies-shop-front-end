import { TypographyH1, TypographyP } from '@/app/_components/shared/typography';

const AboutPage = () => {
	return (
		<section className='flex items-center flex-col gap-8 max-w-2xl mx-auto'>
			<img
				src='/about-me.webp'
				alt='about-me'
				className='rounded-full'
			/>

			<TypographyH1 className='font-light'>/ SOBRE NOSOTROS</TypographyH1>

			<TypographyP className='text-justify leading-relaxed word-spacing'>
				En Cookies, nos dedicamos a crear galletas irresistibles que combinan
				tradición, calidad, y un toque especial en cada receta. Cada galleta que
				ofrecemos es elaborada artesanalmente con ingredientes seleccionados
				cuidadosamente para asegurar un sabor auténtico y memorable. Nuestro
				compromiso es brindarte galletas frescas, deliciosas y perfectas para
				cualquier ocasión. Ya sea que estés buscando un dulce regalo, un
				acompañamiento para tu café, o simplemente algo para satisfacer tu
				antojo, tenemos la galleta ideal para ti. En Cookies, creemos que una
				buena galleta puede alegrar el día, y estamos aquí para hacer cada
				momento un poco más dulce.
			</TypographyP>
		</section>
	);
};

export default AboutPage;
