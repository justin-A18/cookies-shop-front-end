import { TokenPayload } from '@/infrastructure/interfaces';
import { create } from 'zustand';

interface Store {
	user: Partial<TokenPayload>;
	setUser: (user: TokenPayload) => void;
}

const userStorage = typeof window !== "undefined"
	? JSON.parse(window.localStorage.getItem('user')!)
	: {};

export const authStore = create<Store>()((set) => ({
	user: userStorage,
	setUser: (user: TokenPayload) => set(() => ({ user })),
}));