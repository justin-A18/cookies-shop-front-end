import { Roles } from "@/infrastructure/interfaces/api.response";
import { UserEntity } from "@/core/entities";

interface TokenPayload {
	id: string;
	token: string;
	username: string;
	role: Roles;
}

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