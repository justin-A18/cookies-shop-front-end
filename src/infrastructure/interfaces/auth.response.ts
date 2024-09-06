export enum Roles {
	USER_ROLE = 'USER_ROLE',
	ADMIN_ROLE = 'ADMIN_ROLE',
}

export interface TokenPayload {
	id: string;
	token: string;
	username: string;
	role: Roles;
}
