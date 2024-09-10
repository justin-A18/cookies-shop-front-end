import { useMutation } from "@tanstack/react-query";

import { ChangePasswordUseCase } from "@/core/use-cases/auth";
import { apiFetcher } from "@/config/adapters/api.adapter";

export const useUserChangePassword = (token: string) => {

	const changePasswordMutation = useMutation({
		mutationKey: ['changePassword', { token }],
		mutationFn: (body: Record<string, unknown>) => {
			return ChangePasswordUseCase(apiFetcher, body, token);
		},
	});


	return {
		changePasswordMutation
	};
};
