import { MessageResponse } from "@/infrastructure/interfaces/api.response";
import { HttpAdapter } from "@/config/adapters/http";

export const resetPasswordUseCase = async (
	apiFetcher: HttpAdapter, 
	body: Record<string, unknown>
) => {
	const { message } = await apiFetcher.post<MessageResponse>(
		'/auth/reset-password', body
	);
	return message;
};