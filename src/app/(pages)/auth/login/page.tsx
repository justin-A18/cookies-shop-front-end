'use client';

import { loginValidationSchema } from '@/app/_schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useUserLoginMutation } from '@/app/_hooks/auth';

import { TypographyH1 } from '@/app/_components/shared/typography';
import { LoadingButton } from '@/app/_components/shared/buttons';
import { CustomAlert } from '@/app/_components/shared/alert';
import { LinkToForm } from '@/app/_components/auth';
import { Input } from '@/app/_components/ui/input';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/_components/ui/form';

const LoginPage = () => {
	const form = useForm<z.infer<typeof loginValidationSchema>>({
		resolver: zodResolver(loginValidationSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { loginMutation } = useUserLoginMutation();

	function onSubmit(values: z.infer<typeof loginValidationSchema>) {
		loginMutation.mutate(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-3 w-full'
				data-testid='login-form'>
				<TypographyH1 className='text-center text-3xl font-bold'>
					¡Bienvenido de nuevo Dulzura!
				</TypographyH1>

				{loginMutation.isError && (
					<CustomAlert variant='destructive'>
						¡Vaya! Algo salió mal. {loginMutation.error.message}
					</CustomAlert>
				)}

				{loginMutation.isSuccess && (
					<CustomAlert variant='success'>
						¡Delicioso! Has iniciado sesión con éxito.
					</CustomAlert>
				)}

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo Electrónico</FormLabel>
							<FormControl>
								<Input
									type='email'
									data-testid='email-input'
									placeholder='ejemplo@galletas.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Contraseña</FormLabel>
							<FormControl>
								<Input
									type='password'
									data-testid='password-input'
									placeholder='********'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<LinkToForm
					className='text-end text-sm text-gray-600 hover:text-gray-800'
					to='/auth/reset-password'
					text='¿Olvidaste tu contraseña?'
				/>

				<LoadingButton
					type='submit'
					size='lg'
					variant='purple-dark'
					isLoading={loginMutation.isPending}>
					Iniciar Sesión
				</LoadingButton>

				<LinkToForm
					to='/auth/register'
					text='¿Nuevo por aquí? ¡Regístrate ahora!'
				/>
			</form>
		</Form>
	);
};

export default LoginPage;
