import { getAllProductsUseCase } from "@/core/use-cases/products";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
	const productsQuery = useQuery({
		queryKey: ["getAllProducts"],
		queryFn: () => {
			return getAllProductsUseCase(apiFetcher);
		},
	});

	return {
		productsQuery
	};
};
