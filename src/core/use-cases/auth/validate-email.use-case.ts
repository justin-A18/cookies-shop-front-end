import { MessageResponse } from "@/infrastructure/interfaces/api.response";
import { HttpAdapter } from "@/config/adapters/http";

export const validateEmailUseCase = async (
	apiFetcher: HttpAdapter, 
	token: string
) => {
	const { message } = await apiFetcher.get<MessageResponse>(
		`/auth/validate-email/${token}`
	);
	return message;
};