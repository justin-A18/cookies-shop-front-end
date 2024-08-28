import { Roles } from "@/infrastructure/interfaces/api.response";

export interface UserEntity {
	id: string;
	username: string;
	email: string;
	avatar: string;
	token: string;
	role: Roles;
	isValidEmail: boolean;
}