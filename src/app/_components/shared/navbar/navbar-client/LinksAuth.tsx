import Link from "next/link";

export const LinksAuth = () => {
	return (
		<div className='flex items-center gap-4'>
			<Link
				href='/auth/login'
				className='font-medium'>
				Login
			</Link>

			<Link
				href='/auth/register'
				className='font-medium px-4 py-2 border-2 rounded-md 
						border-black hover:bg-black hover:text-white transition-colors duration-500'>
				Registrate
			</Link>
		</div>
	);
};
