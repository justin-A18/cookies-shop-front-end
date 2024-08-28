export interface MessageResponse {
	message: string;
};

export enum Roles {
	USER_ROLE = 'USER_ROLE',
	ADMIN_ROLE = 'ADMIN_ROLE',
}

export interface LoginApiResponse {
	id: string;
	token: string;
	email: string;
	username: string;
	isValidEmail: boolean;
	role: Roles;
	avatar: string;
}