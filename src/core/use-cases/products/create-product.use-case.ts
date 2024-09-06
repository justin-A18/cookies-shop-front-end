import { MessageResponse } from "@/infrastructure/interfaces";
import { HttpAdapter } from "@/config/adapters/http";

export const createProductUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, token: string) => {
	const message = await apiFetcher.post<MessageResponse>('/products', body, token)
	return message
}