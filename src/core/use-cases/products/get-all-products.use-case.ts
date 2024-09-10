import { ProductsMapper } from '@/infrastructure/mappers/products';
import { HttpAdapter } from '@/config/adapters/http';
import { ProductEntity } from '@/core/entities';

export const getAllProductsUseCase = async (
	apiFetcher: HttpAdapter,
) => {
	const products = await apiFetcher.get<ProductEntity[]>('/products');
	return ProductsMapper.fromEntities(products);
};
