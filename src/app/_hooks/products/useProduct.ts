import { getProductUseCase } from "@/core/use-cases/products";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useQuery } from "@tanstack/react-query";

export const useProductQuery = (productId: string) => {

	const productQuery = useQuery({
		queryKey: ["getProductByid", productId],
		queryFn: () => {
			return getProductUseCase(apiFetcher, productId);
		}
	});

	return {
		productQuery
	};
};
