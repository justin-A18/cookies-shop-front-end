import { AuthMapper } from "@/infrastructure/mappers/auth/auth.mapper";
import { HttpAdapter } from "@/config/adapters/http";
import { UserEntity } from "@/core/entities";

export const loginUserUseCase = async (
	apiFetcher: HttpAdapter,
	body: Record<string, unknown>
) => {
	const user = await apiFetcher.post<UserEntity>('/auth/login', body);
	return AuthMapper.toTokenPayload(user);
};

