import { BestSellers } from './_components/home/best-sellers/BestSellers';
import { Flavors } from './_components/home/flavors/Flavors';
import { Slider } from './_components/home/slider/Slider';
import { NavBar } from './_components/shared/navbar/navbar-client';

export default function Home() {
	return (
		<>
			<NavBar />

			<main className='w-full min-h-screen max-w-7xl mx-auto'>
				<Slider />
				<BestSellers />
				<Flavors />
			</main>
		</>
	);
}
