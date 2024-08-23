import { MessageResponse } from '@/infrastructure/interfaces/api.response';
import { HttpAdapter } from '@/config/adapters/http';

export const ChangePasswordUseCase = async (
	apiFetcher: HttpAdapter,
	body: Record<string, unknown>,
	token: string,
) => {
	const { message } = await apiFetcher.post<MessageResponse>(
		`/auth/change-password/${token}`,
		body,
	);
	return message;
};
