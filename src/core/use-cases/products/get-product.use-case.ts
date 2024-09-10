import { ProductsMapper } from "@/infrastructure/mappers/products";
import { HttpAdapter } from "@/config/adapters/http";
import { ProductEntity } from "@/core/entities";

export const getProductUseCase = async (apiFetcher: HttpAdapter, id: string) => {
	const product = await apiFetcher.get<ProductEntity>(`/products/${id}`);
	return ProductsMapper.fromEntity(product);
};