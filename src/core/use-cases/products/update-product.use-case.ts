import { MessageResponse } from "@/infrastructure/interfaces";
import { HttpAdapter } from "@/config/adapters/http";

interface Options {
	id: string;
	token: string;
	apiFetcher: HttpAdapter;
	body: Record<string, unknown>;
}

export const updateProductUseCase = async ({ apiFetcher, body, id, token }: Options) => {
	const message = await apiFetcher.patch<MessageResponse>(`/products/${id}`, body, token);
	return message;
};