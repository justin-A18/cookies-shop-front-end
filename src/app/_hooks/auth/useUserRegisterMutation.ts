import { apiFetcher } from '@/config/adapters/api.adapter';
import { registerUserUseCase } from '@/core/use-cases/auth';
import { useMutation } from '@tanstack/react-query';

export const useUserRegisterMutation = () => {
	const registeMutation = useMutation({
		mutationKey: ['register'],
		mutationFn: (body: Record<string, unknown>) => {
			return registerUserUseCase(apiFetcher, body);
		},
	});

	return {
		registeMutation
	};
};
