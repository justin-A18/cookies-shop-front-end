'use client';

import { useRouter } from 'next/navigation';

import { useUserEmailValidation } from '@/app/_hooks/auth';

import { TypographyH2, TypographyP } from '@/app/_components/shared/typography';
import { LoadingButton } from '@/app/_components/shared/buttons';
import { CustomAlert } from '@/app/_components/shared/alert';


const ConfirmPage = ({ params }: { params: { token: string } }) => {
	const { validateEmailQuery } = useUserEmailValidation(params.token);

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
		</div>
	);
};

export default ConfirmPage;
