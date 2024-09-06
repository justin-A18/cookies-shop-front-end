export interface ProductEntity {
	id: string;
	name: string;
	price: number;
	images: string[];
	isNovelty: boolean;
	stock: number;
	description: string;
	cart: [];
}