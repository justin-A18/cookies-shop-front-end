import { HttpAdapter } from "./http";

export const apiFetcher = new HttpAdapter({
	baseURL: 'http://localhost:3000/api/v1',
});