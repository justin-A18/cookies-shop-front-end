import { deleteProductUseCase} from "@/core/use-cases/products";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation } from "@tanstack/react-query";

export const useProductDeleteMutation = (token: string, productId: string) => {

	const productDeleteMutation = useMutation({
		mutationKey: ["deleteProduct", { token, productId }],
		mutationFn: () => {
			return deleteProductUseCase(apiFetcher, token, productId);
		},
	});

	return {
		productDeleteMutation,
	};
};
