import { ProductsMapper } from "@/infrastructure/mappers/products/products.mapper";
import { HttpAdapter } from "@/config/adapters/http";
import { ProductEntity } from "@/core/entities";

interface Options {
	id: string;
	token: string;
	apiFetcher: HttpAdapter;
	body: Record<string, unknown>;
}

export const updateProductUseCase = async ({ apiFetcher, body, id, token }: Options) => {
	const product = await apiFetcher.patch<ProductEntity>(`/products/${id}`,body, token);
	return ProductsMapper.fromEntity(product);
};