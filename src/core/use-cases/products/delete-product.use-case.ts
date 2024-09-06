import { MessageResponse } from "@/infrastructure/interfaces";
import { HttpAdapter } from "@/config/adapters/http";

export const deleteProductUseCase = async (apiFetcher: HttpAdapter, token: string, id: string) => {
	const message = await apiFetcher.delete<MessageResponse>(`/products/${id}`, token);
	return message;
};