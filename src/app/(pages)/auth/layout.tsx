/* eslint-disable @next/next/no-img-element */

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='bg-[#F1D1E0] w-full min-h-screen'>
			<section className='flex items-center justify-center w-[90%] mx-auto min-h-screen'>
				<article
					className='max-w-[400px] w-full bg-white p-4 rounded-md flex flex-col 
				items-center gap-2 shadow-lg'>
					<img
						className='size-12'
						src='/favicon.svg'
						alt='cookie'
					/>

					{children}
				</article>
			</section>
		</main>
	);
};

export default layout;
