import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email({
		message: 'Por favor, ingresa un correo electrónico válido.',
	}),
	password: z
		.string()
		.min(6, {
			message: 'La contraseña debe tener al menos 6 caracteres.',
		}),
});

export const registerSchema = z.object({
	username: z.string().min(2, {
		message: 'El nombre de usuario debe tener al menos 2 caracteres.',
	}),
	email: z.string().email({
		message: 'Por favor, ingresa un correo electrónico válido.',
	}),
	password: z
		.string()
		.min(6, {
			message: 'La contraseña debe tener al menos 6 caracteres.',
		}),
});

export const resetPasswordSchema = z.object({
	email: z.string().email({
		message: 'Por favor, ingresa un correo electrónico válido.',
	}),
})

export const changePasswordSchema = z.object({
	password: z
		.string()
		.min(6, {
			message: 'La contraseña debe tener al menos 6 caracteres.',
		}),
})