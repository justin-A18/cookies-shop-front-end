import { NavBar } from '@/app/_components/shared/navbar';

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<NavBar />
			<main className='w-full max-w-7xl min-h-screen py-8 px-5 mx-auto'>
				{children}
			</main>
		</>
	);
};

export default ProductsLayout;
