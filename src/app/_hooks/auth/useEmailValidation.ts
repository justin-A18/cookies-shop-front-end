'use client';

import { apiFetcher } from "@/config/adapters/api.adapter";
import { validateEmailUseCase } from "@/core/use-cases/auth";
import { useQuery } from "@tanstack/react-query";

export const useUserEmailValidation = (token: string) => {
	const validateEmailQuery = useQuery({
		queryKey: ["validateEmail", { token }],
		queryFn: () => {
			return validateEmailUseCase(apiFetcher, token);
		},
	});

	return {
		validateEmailQuery,
	};
};