'use client';

import { FormatHelper } from '@/config/helpers';
import { ProductEntity } from '@/core/entities';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/app/_components/ui/badge';
import { DataActions } from '../actions/DataActions';

export type Order = {
	id: string;
	products: ProductEntity[];
	total: number;
	status: 'pending' | 'success' | 'cancelled';
	customer: string;
};

export const ordercolumns: ColumnDef<Order>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return `#${value}`;
		},
	},
	{
		accessorKey: 'products',
		header: 'Products',
		cell: ({ getValue }) => {
			const value = getValue<ProductEntity[]>();
			return (
				value
					.map((product) => product.name)
					.join(', ')
					.substring(0, 25) + '...'
			);
		},
	},
	{
		accessorKey: 'customer',
		header: 'Cliente',
	},
	{
		accessorKey: 'status',
		header: 'Estado',
		cell: ({ getValue }) => {
			const value = getValue<'pending' | 'success' | 'cancelled'>();
			switch (value) {
				case 'pending':
					return <Badge variant='pending'>Pendiente</Badge>;
				case 'success':
					return <Badge variant='success'>Entregado</Badge>;
				case 'cancelled':
					return <Badge variant='error'>Cancelado</Badge>;
			}
		},
	},
	{
		accessorKey: 'total',
		header: 'Total',
		cell: ({ getValue }) => {
			const value = getValue<number>();
			return FormatHelper.formatPrice(value);
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const raffle = row.original;

			return <DataActions />;
		},
	},
];
