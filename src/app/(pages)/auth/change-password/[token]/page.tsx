/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';

import { changePasswordValidationSchema } from '@/app/_schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useUserChangePassword } from '@/app/_hooks/auth';

import { TypographyH1 } from '@/app/_components/shared/typography';
import { LoadingButton } from '@/app/_components/shared/buttons';
import { buttonVariants } from '@/app/_components/ui/button';
import { CustomAlert } from '@/app/_components/shared/alert';
import { Input } from '@/app/_components/ui/input';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/_components/ui/form';

const ChangePassword = ({ params }: { params: { token: string } }) => {
	const form = useForm<z.infer<typeof changePasswordValidationSchema>>({
		resolver: zodResolver(changePasswordValidationSchema),
		defaultValues: {
			password: '',
		},
	});

	const { changePasswordMutation } = useUserChangePassword(params.token);

	function onSubmit(values: z.infer<typeof changePasswordValidationSchema>) {
		changePasswordMutation.mutate(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-3 w-full'
				data-testid='login-form'>
				<TypographyH1 className='text-center'>
					Ingresa tu nueva contraseña
				</TypographyH1>

				{changePasswordMutation.isError && (
					<CustomAlert variant='destructive'>
						{changePasswordMutation.error.message}
					</CustomAlert>
				)}

				{changePasswordMutation.isSuccess && (
					<CustomAlert variant='success'>
						{changePasswordMutation.data}
					</CustomAlert>
				)}

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nueva contraseña</FormLabel>
							<FormControl>
								<Input
									type='password'
									data-testid='password-input'
									placeholder='******'
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
					isLoading={changePasswordMutation.isPending}>
					Cambiar contraseña
				</LoadingButton>

				{changePasswordMutation.isSuccess && (
					<Link
						className={buttonVariants({
							variant: 'purple-dark',
							size: 'lg',
							className: 'w-full font-semibold text-base',
						})}
						href='/auth/login'>
						Inicia sesión
					</Link>
				)}
			</form>
		</Form>
	);
};

export default ChangePassword;
