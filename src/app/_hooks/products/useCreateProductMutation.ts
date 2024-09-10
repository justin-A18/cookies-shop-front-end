import { createProductUseCase } from "@/core/use-cases/products";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation } from "@tanstack/react-query";

export const useProductCreateMutation = (token: string) => {
	const productCreateMutation = useMutation({
		mutationKey: ["createProduct", { token }],
		mutationFn: (body: Record<string, unknown>) => {
			return createProductUseCase(apiFetcher, body, token);
		},
	});

	return {
		productCreateMutation,
	};
};
