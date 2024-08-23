/* eslint-disable react/no-unescaped-entities */
'use client';

import { loginSchema } from '@/app/_schemas/user.schema';
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
import { Button } from '@/app/_components/ui/button';
import { TypographyH1 } from '@/app/_components/shared/typography';
import { LinkToForm } from '@/app/_components/auth/LinkToForm';

const ForgotPassword = () => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	function onSubmit(values: z.infer<typeof loginSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-3 w-full'
				data-testid='login-form'>
				<TypographyH1 className='text-center'>Verify to Reset</TypographyH1>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									data-testid='email-input'
									placeholder='jhoe.doe@gmail.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					className='w-full font-semibold text-base'
					size='lg'
					variant='purple-dark'>
					Verify email
				</Button>

				<LinkToForm
					to='/auth/register'
					text="Don't have an account?"
				/>

				<LinkToForm
					to='/auth/login'
					text='Already have an account?'
				/>
			</form>
		</Form>
	);
};

export default ForgotPassword;
