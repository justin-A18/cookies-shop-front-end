import { TokenPayload } from "@/infrastructure/interfaces/api.response";
import { UserEntity } from "@/core/entities";

export class AuthMapper {
	public static toTokenPayload(user: UserEntity): TokenPayload {
		return {
			id: user.id,
			token: user.token,
			username: user.username,
			role: user.role,
		};
	}
}