export const SliderItem = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className='w-1/3 h-full flex-shrink-0 relative'>
			<div className='absolute w-full h-full bg-black/20'></div>

			<img
				className='max-w-full w-full block h-full object-cover'
				src={src}
				alt={alt}
			/>
		</div>
	);
};
