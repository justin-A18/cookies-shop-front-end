import { TokenPayload } from '@/infrastructure/interfaces';
import { apiFetcher } from '@/config/adapters/api.adapter';
import { useMutation } from '@tanstack/react-query';

import {
	ChangePasswordUseCase,
	resetPasswordUseCase,
	registerUserUseCase,
	loginUserUseCase,
} from '@/core/use-cases/auth';

import { authStore } from '@/app/_providers/store/auth';
import { useLocalStorage } from 'usehooks-ts';


export const useAuthMutation = (token?: string) => {
	const userToken = token ?? '';

	const [, setUserStorage] = useLocalStorage<Partial<TokenPayload>>("user", {});

	const { setUser } = authStore();

	const loginMutation = useMutation({
		mutationKey: ['login'],
		mutationFn: (body: Record<string, unknown>) => {
			return loginUserUseCase(apiFetcher, body);
		},
		onSuccess: (data) => {
			setUserStorage(data);
			setUser(data);
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
