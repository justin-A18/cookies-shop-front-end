import { CardDashboard } from '@/app/_components/admin/cards/CardDashboard';
import {
	Order,
	ordercolumns,
} from '@/app/_components/admin/tables/columns/orderColumn';
import { DataTable } from '@/app/_components/admin/tables/DataTable';
import { TypographyH4 } from '@/app/_components/shared/typography';
import { mockOrders } from '@/config/const';
import { FormatHelper } from '@/config/helpers';
import { Banknote, CalendarRange, Users } from 'lucide-react';

async function getData(): Promise<Order[]> {
	return mockOrders;
}

const DashboardPage = async () => {
	const data = await getData();

	return (
		<div className='p-4 md:p-10 space-y-4'>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] 
			gap-4'>
				<CardDashboard
					name='Clientes'
					value={1000}
					icon={<Users />}
				/>

				<CardDashboard
					name='Ordenes'
					value={1000}
					icon={<CalendarRange />}
				/>

				<CardDashboard
					name='Ganancias'
					value={FormatHelper.formatPrice(1000)}
					icon={<Banknote />}
				/>
			</div>

			<DataTable
				columns={ordercolumns}
				data={data}
				title='Ordenes'
			/>
		</div>
	);
};

export default DashboardPage;
