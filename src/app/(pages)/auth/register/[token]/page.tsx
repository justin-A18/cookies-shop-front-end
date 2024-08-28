'use client';

import { LoadingButton } from '@/app/_components/shared/buttons/LoadingButton';
import { TypographyH2, TypographyP } from '@/app/_components/shared/typography';
import { useAuthQuery } from '@/app/_hooks/auth/useAuthQuery';
import { useRouter } from 'next/navigation';

const ConfirmPage = ({ params }: { params: { token: string } }) => {
	const { validateEmailQuery } = useAuthQuery(params.token);

	const router = useRouter();

	return (
		<div className='space-y-4'>
			<TypographyH2 className='text-center'>
				{validateEmailQuery.isLoading
					? '¡Estamos horneando tu cuenta!'
					: '¡Tu cuenta ha sido horneada a la perfección!'}
			</TypographyH2>

			{validateEmailQuery.isError && (
				<TypographyP className='text-center'>
					{validateEmailQuery.error.message}
				</TypographyP>
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
				{validateEmailQuery.isLoading ? 'Horneando...' : 'Saborea tus galletas'}
			</LoadingButton>
		</div>
	);
};

export default ConfirmPage;
