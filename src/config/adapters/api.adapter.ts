import { HttpAdapter } from "./http";

export const apiFetcher = new HttpAdapter({
	baseURL: process.env.NEXT_PUBLIC_URL_BASE,
});