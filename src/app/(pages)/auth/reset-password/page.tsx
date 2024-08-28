/* eslint-disable react/no-unescaped-entities */
'use client';

import { resetPasswordSchema } from '@/app/_schemas/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/_components/ui/form';

import { Input } from '@/app/_components/ui/input';
import { TypographyH1 } from '@/app/_components/shared/typography';
import { LinkToForm } from '@/app/_components/auth/LinkToForm';
import { useAuthMutation } from '@/app/_hooks/auth/useAuthMutation';
import { CustomAlert } from '@/app/_components/shared/alert';
import { LoadingButton } from '@/app/_components/shared/buttons/LoadingButton';

const ResetPassword = () => {
	const form = useForm<z.infer<typeof resetPasswordSchema>>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			email: '',
		},
	});

	const { resetPasswordMutation } = useAuthMutation();

	function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
		resetPasswordMutation.mutate(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-3 w-full'
				data-testid='login-form'>
				<TypographyH1 className='text-center text-3xl font-bold'>Recupera tu Dulzura</TypographyH1>

				{resetPasswordMutation.isError && (
					<CustomAlert variant='destructive'>
						¡Oh no! Algo salió mal. {resetPasswordMutation.error.message}
					</CustomAlert>
				)}

				{resetPasswordMutation.isSuccess && (
					<CustomAlert variant='success'>
					{resetPasswordMutation.data}
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
									placeholder='nombre@dulzuras.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<LoadingButton
					type='submit'
					size='lg'
					variant='purple-dark'
					isLoading={resetPasswordMutation.isPending}>
					Verificar Correo
				</LoadingButton>

				<LinkToForm
					to='/auth/register'
					text='¿No tienes una cuenta? ¡Regístrate ahora!'
				/>

				<LinkToForm
					to='/auth/login'
					text='¿Ya tienes una cuenta? ¡Inicia sesión ahora!'
				/>
			</form>
		</Form>
	);
};

export default ResetPassword;
