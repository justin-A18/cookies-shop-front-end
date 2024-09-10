import { updateProductUseCase } from "@/core/use-cases/products";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation } from "@tanstack/react-query";

export const useProductUpdateMutation = (token: string, productId: string) => {

	const productUpdateMutation = useMutation({
		mutationKey: ["updateProduct", { token, productId }],
		mutationFn: (body: Record<string, unknown>) => {
			return updateProductUseCase({ apiFetcher, body, token, id: productId });
		},
	});

	return {
		productUpdateMutation,
	}
}
