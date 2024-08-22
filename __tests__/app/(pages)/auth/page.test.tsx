import LoginPage from '@/app/(pages)/auth/login/page';

import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from '@testing-library/react';

import { expect, it, describe, beforeEach, afterEach } from 'vitest';

describe('Pruebas en el <LoginPage/>', () => {
	beforeEach(() => {
		render(<LoginPage />);
	});

	afterEach(() => {
		cleanup();
	});

	it('Debe mostrar el texto Sign In', () => {
		const heading: HTMLHeadingElement = screen.getByRole('heading', {
			level: 1,
			name: /sign in/i,
		});

		expect(heading).toBeDefined();
	});

	it('Debe validar los inputs al hacer submit', async () => {
		const emailElement: HTMLInputElement = screen.getByTestId('email-input');
		const passElement: HTMLInputElement = screen.getByTestId('password-input');

		fireEvent.change(emailElement, { target: { value: 'test@gmail.com' } });
		fireEvent.change(passElement, { target: { value: '123456' } });

		const formElement: HTMLFormElement = screen.getByTestId('login-form');
		fireEvent.submit(formElement);

		await waitFor(() => {
			expect(emailElement.value).toBe('test@gmail.com');
			expect(passElement.value).toBe('123456');
		});
	});

	it('Debe mostrar un error si el email es incorrecto', async () => {
		const emailElement: HTMLInputElement = screen.getByTestId('email-input');
		const passElement: HTMLInputElement = screen.getByTestId('password-input');

		fireEvent.change(emailElement, { target: { value: 'test' } });
		fireEvent.change(passElement, { target: { value: '123456' } });

		const formElement: HTMLFormElement = screen.getByTestId('login-form');
		fireEvent.submit(formElement);

		await waitFor(() => {
			expect(emailElement.value).toBe('test');
			expect(passElement.value).toBe('123456');
			expect(
				screen.getByText('Please enter a valid email address.'),
			).toBeDefined();
		});
	});

	it('Debe mostrar un error si el password es incorrecto', async () => {
		const emailElement: HTMLInputElement = screen.getByTestId('email-input');
		const passElement: HTMLInputElement = screen.getByTestId('password-input');

		fireEvent.change(emailElement, { target: { value: 'test@gmail.com' } });
		fireEvent.change(passElement, { target: { value: '12345' } });

		const formElement: HTMLFormElement = screen.getByTestId('login-form');
		fireEvent.submit(formElement);

		await waitFor(() => {
			expect(emailElement.value).toBe('test@gmail.com');
			expect(passElement.value).toBe('12345');
			expect(
				screen.getByText('Password must be at least 6 characters.'),
			).toBeDefined();
		});
	});

	it('Debe mostrar un error si el email y el password son incorrectos', async () => {
		const emailElement: HTMLInputElement = screen.getByTestId('email-input');
		const passElement: HTMLInputElement = screen.getByTestId('password-input');

		fireEvent.change(emailElement, { target: { value: 'test' } });
		fireEvent.change(passElement, { target: { value: '12345' } });

		const formElement: HTMLFormElement = screen.getByTestId('login-form');
		fireEvent.submit(formElement);

		await waitFor(() => {
			expect(emailElement.value).toBe('test');
			expect(passElement.value).toBe('12345');
			expect(
				screen.getByText('Please enter a valid email address.'),
			).toBeDefined();
			expect(
				screen.getByText('Password must be at least 6 characters.'),
			).toBeDefined();
		});
	});
});
