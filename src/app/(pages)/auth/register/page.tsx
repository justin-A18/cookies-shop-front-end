'use client';

import { registerSchema } from '@/app/_schemas/user.schema';
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
import { LoadingButton } from '@/app/_components/shared/buttons/LoadingButton';
import { useAuthMutation } from '@/app/_hooks/auth/useAuthMutation';
import { CustomAlert } from '@/app/_components/shared/alert';

const RegisterPage = () => {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			username: '',
		},
	});

	const { registeMutation } = useAuthMutation();

	function onSubmit(values: z.infer<typeof registerSchema>) {
		registeMutation.mutate(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-3 w-full'>
				<TypographyH1 className='text-center text-3xl font-bold'>
					¡Únete a la Dulzura!
				</TypographyH1>

				{registeMutation.isError && (
					<CustomAlert variant='destructive'>
						¡Vaya! Algo salió mal. {registeMutation.error.message}
					</CustomAlert>
				)}

				{registeMutation.isSuccess && (
					<CustomAlert variant='success'>{registeMutation.data}</CustomAlert>
				)}

				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre de Usuario</FormLabel>
							<FormControl>
								<Input
									type='text'
									placeholder='John Doe'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo Electrónico</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='nombre@dulzuras.com'
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
					isLoading={registeMutation.isPending}>
					Registrarse y disfrutar
				</LoadingButton>

				<LinkToForm
					to='/auth/login'
					text='¿Ya tienes una cuenta? ¡Inicia sesión ahora!'
				/>
			</form>
		</Form>
	);
};

export default RegisterPage;
