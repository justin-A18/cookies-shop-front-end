import {
	Order,
	ordercolumns,
} from '@/app/_components/admin/tables/columns/orderColumn';
import { DataTable } from '@/app/_components/admin/tables/DataTable';
import { mockOrders } from '@/config/const';

async function getData(): Promise<Order[]> {
	return mockOrders;
}

const AdminProductsPage = async () => {
	const data = await getData();

	return (
		<main className='p-4 md:p-8'>
			<DataTable
				columns={ordercolumns}
				data={data}
				title='Productos'
			/>
		</main>
	);
};

export default AdminProductsPage;
