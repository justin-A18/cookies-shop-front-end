import { UserEntity } from "@/core/entities";

interface TokenPayload {
	id: string;
	token: string;
	username: string;
}

export class AuthMapper {
	public static toTokenPayload(user: UserEntity): TokenPayload{
		return {
			id: user.id,
			token: user.token,
			username: user.username,
		};
	}
}