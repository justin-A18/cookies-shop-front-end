import { LayoutGrid, Package, User } from 'lucide-react';

export const navLinks = [
	{
		id: 1,
		label: 'Inicio',
		href: '/',
	},
	{
		id: 2,
		label: 'Explorar',
		href: '/explore',
	},
	{
		id: 3,
		label: 'Productos',
		href: '/products',
	},
	{
		id: 4,
		label: 'Sobre nosotros',
		href: '/about-us',
	},
];

export const navLinksAdmin = [
	{
		id: 0,
		label: 'Dashboard',
		href: '/admin',
		icon: <LayoutGrid />,
	},
	{
		id: 1,
		label: 'Productos',
		href: '/admin/products',
		icon: <Package />,
	},
	{
		id: 2,
		label: 'Clientes',
		href: '/admin/clients',
		icon: <User />,
	},
];
