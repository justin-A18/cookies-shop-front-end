import { ProductsMapper } from "@/infrastructure/mappers/products";
import { HttpAdapter } from "@/config/adapters/http";
import { ProductEntity } from "@/core/entities";

export const getProductUseCase = async (apiFetcher: HttpAdapter, token: string, id: string) => {
	const product = await apiFetcher.get<ProductEntity>(`/products/${id}`, token);
	return ProductsMapper.fromEntity(product)
};