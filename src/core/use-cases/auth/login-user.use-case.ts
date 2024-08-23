import { LoginApiResponse } from "@/infrastructure/interfaces/api.response";
import { AuthMapper } from "@/infrastructure/mappers/auth/auth.mapper";
import { HttpAdapter } from "@/config/adapters/http";

export const loginUserUseCase = async (
	apiFetcher: HttpAdapter, 
	body: Record<string, unknown>
) => {
	const user = await apiFetcher.post<LoginApiResponse>('/auth/login', body);
	return AuthMapper.toTokenPayload(user);
};

