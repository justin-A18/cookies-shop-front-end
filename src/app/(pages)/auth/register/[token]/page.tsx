'use client';

import { LoadingButton } from '@/app/_components/shared/buttons/LoadingButton';
import { TypographyH2, TypographyP } from '@/app/_components/shared/typography';
import { CustomAlert } from '@/app/_components/shared/alert';
import { buttonVariants } from '@/app/_components/ui/button';
import { useAuthQuery } from '@/app/_hooks/auth/useAuthQuery';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ConfirmPage = ({ params }: { params: { token: string } }) => {
	const { validateEmailQuery } = useAuthQuery(params.token);

	const router = useRouter();

	return (
		<div className='space-y-4 w-full'>
			<TypographyH2 className='text-center'>
				{validateEmailQuery.isLoading
					? '¡Estamos horneando tu cuenta!'
					: validateEmailQuery.isSuccess
					? '¡Tu cuenta ha sido horneada a la perfección!'
					: 'Algo salió mal'}
			</TypographyH2>

			{validateEmailQuery.isError && (
				<CustomAlert variant='destructive'>
					¡Vaya! Algo salió mal. {validateEmailQuery.error.message}
				</CustomAlert>
			)}

			{!validateEmailQuery.isSuccess && (
				<TypographyP className='text-center'>
					{validateEmailQuery.data}
				</TypographyP>
			)}

			<LoadingButton
				type='submit'
				size='lg'
				variant='purple-dark'
				onClick={() => router.push('/auth/login')}
				isLoading={validateEmailQuery.isLoading}>
				{validateEmailQuery.isLoading ? 'Horneando...' : 'Iniciar sesión'}
			</LoadingButton>

			{validateEmailQuery.isError && (
				<Link
					className={buttonVariants({
						variant: 'purple-dark',
						size: 'lg',
						className: 'w-full font-semibold text-base',
					})}
					href='/auth/reset-password'>
					Reenviar correo
				</Link>
			)}
		</div>
	);
};

export default ConfirmPage;
