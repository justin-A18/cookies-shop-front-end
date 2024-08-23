import { AxiosRequestConfig } from "axios";

export abstract class HttpImpl {
	abstract get<T>(
		url: string,
		token?: string,
		options?: AxiosRequestConfig,
	): Promise<T>;

	abstract post<T>(
		url: string,
		body: Record<string, unknown>,
		token?: string,
		options?: AxiosRequestConfig,
	): Promise<T>;

	abstract patch<T>(
		url: string,
		body: Record<string, unknown>,
		token?: string,
		options?: AxiosRequestConfig,
	): Promise<T>;

	abstract delete<T>(
		url: string,
		token?: string,
		options?: AxiosRequestConfig,
	): Promise<T>;
}