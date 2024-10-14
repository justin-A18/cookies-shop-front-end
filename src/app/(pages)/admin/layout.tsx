import { NavbarAdmin, NavbarMobile } from '@/app/_components/shared/navbar';
import { Sidebar } from '@/app/_components/shared/sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main
			className='w-full min-h-screen md:grid md:grid-cols-[250px_1fr] 
		bg-[#191F2F]'>
			<Sidebar />
			<section className='bg-[#F5F7FA] pb-16 md:pb-0'>
				<NavbarAdmin />
				{children}
			</section>
			<NavbarMobile />
		</main>
	);
};

export default AdminLayout;
