'use client'

import { useMutation } from "@tanstack/react-query";

import { apiFetcher } from "@/config/adapters/api.adapter";
import { TokenPayload } from "@/infrastructure/interfaces";
import { loginUserUseCase } from "@/core/use-cases/auth";
import { authStore } from "@/app/_providers/store/auth";

import { useLocalStorage } from "usehooks-ts";

export const useUserLoginMutation = () => {

	const [, setUserStorage] = useLocalStorage<Partial<TokenPayload>>("user", {});
	const { setUser } = authStore();

	const loginMutation = useMutation({
		mutationKey: ["login"],
		mutationFn: (body: Record<string, unknown>) => {
			return loginUserUseCase(apiFetcher, body);
		},
		onSuccess: (data) => {
			setUserStorage(data);
			setUser(data);
		},
	});

	return {
		loginMutation
	}
}
