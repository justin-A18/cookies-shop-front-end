import { ProductsMapper } from '@/infrastructure/mappers/products/products.mapper';
import { HttpAdapter } from '@/config/adapters/http';
import { ProductEntity } from '@/core/entities';

export const getAllProductsUseCase = async (
	apiFetcher: HttpAdapter,
	token: string,
) => {
	const products = await apiFetcher.get<ProductEntity[]>(
		'/products',
		token,
	);
	
	return ProductsMapper.fromEntities(products);
};
