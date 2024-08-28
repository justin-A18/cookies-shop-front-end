import { SliderInfo } from './SliderInfo';
import { SliderItem } from './SliderItem';

export const Slider = () => {
	return (
		<section className='w-full relative min-h-[calc(100vh-5rem)] overflow-hidden'>
			<div className='w-[300%] h-full absolute flex overflow-hidden 
			animate-[slide-in_9s_steps(3)_infinite] transition-transform'>
				<SliderItem
					src='/slide-1.jpg'
					alt='slider-1'
				/>

				<SliderItem
					src='/slide-2.jpg'
					alt='slider-2'
				/>

				<SliderItem
					src='/slide-3.jpg'
					alt='slider-3'
				/>
			</div>

			<SliderInfo />
		</section>
	);
};
