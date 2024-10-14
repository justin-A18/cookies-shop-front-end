import { NavBar } from '@/app/_components/shared/navbar/navbar-client';

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<NavBar />
			<main className='w-full max-w-7xl min-h-screen py-8 px-5 mx-auto'>
				{children}
			</main>
		</>
	);
};

export default ExploreLayout;
