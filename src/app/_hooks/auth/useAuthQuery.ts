import { apiFetcher } from "@/config/adapters/api.adapter";
import { validateEmailUseCase } from "@/core/use-cases/auth";
import { useQuery } from "@tanstack/react-query";

const useAuthQuery = (token?: string) => {

	const userToken = token ?? '';

	const validateEmailQuery = useQuery({
		queryKey: ["validateEmail", { token: userToken }],
		queryFn: () => {
			return validateEmailUseCase(apiFetcher, userToken);
		},
	});

	return {
		validateEmailQuery,
	};
};