import { useMutation } from '@tanstack/react-query';

import { resetPasswordUseCase } from '@/core/use-cases/auth';
import { apiFetcher } from '@/config/adapters/api.adapter';

export const useUserResetPasswordMutation = () => {

	const resetPasswordMutation = useMutation({
		mutationKey: ['resetPassword'],
		mutationFn: (body: Record<string, unknown>) => {
			return resetPasswordUseCase(apiFetcher, body);
		},
	});

	return {
		resetPasswordMutation,
	};
};
