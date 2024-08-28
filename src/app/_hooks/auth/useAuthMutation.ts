import { apiFetcher } from '@/config/adapters/api.adapter';
import { useMutation } from '@tanstack/react-query';
import {
	ChangePasswordUseCase,
	resetPasswordUseCase,
	registerUserUseCase,
	loginUserUseCase,
} from '@/core/use-cases/auth';

export const useAuthMutation = (token?: string) => {
	const userToken = token ?? '';

	const loginMutation = useMutation({
		mutationKey: ['login'],
		mutationFn: (body: Record<string, unknown>) => {
			return loginUserUseCase(apiFetcher, body);
		},
	});

	const registeMutation = useMutation({
		mutationKey: ['register'],
		mutationFn: (body: Record<string, unknown>) => {
			return registerUserUseCase(apiFetcher, body);
		},
	});

	const changePasswordMutation = useMutation({
		mutationKey: ['changePassword', { token: userToken }],
		mutationFn: (body: Record<string, unknown>) => {
			return ChangePasswordUseCase(apiFetcher, body, userToken);
		},
	});

	const resetPasswordMutation = useMutation({
		mutationKey: ['resetPassword', { token: userToken }],
		mutationFn: (body: Record<string, unknown>) => {
			return resetPasswordUseCase(apiFetcher, body);
		},
	});

	return {
		loginMutation,
		registeMutation,
		changePasswordMutation,
		resetPasswordMutation,
	};
};
