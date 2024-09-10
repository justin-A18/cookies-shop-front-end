/* eslint-disable react/no-unescaped-entities */
'use client';

import { resetPasswordValidationSchema } from '@/app/_schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


import { useUserResetPasswordMutation } from '@/app/_hooks/auth';
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

const ResetPassword = () => {
	const form = useForm<z.infer<typeof resetPasswordValidationSchema>>({
		resolver: zodResolver(resetPasswordValidationSchema),
		defaultValues: {
			email: '',
		},
	});

	const { resetPasswordMutation } = useUserResetPasswordMutation();

	function onSubmit(values: z.infer<typeof resetPasswordValidationSchema>) {
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
