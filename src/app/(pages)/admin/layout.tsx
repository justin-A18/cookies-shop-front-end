import { Sidebar } from '@/app/_components/shared/sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='w-full min-h-screen grid grid-cols-[200px_1fr]'>
			<Sidebar />
			<section className='p-4'>{children}</section>
		</main>
	);
};

export default AdminLayout;
