import { TypographyH4, TypographyP } from '@/app/_components/shared/typography';

interface Props {
	name: string;
	value: number | string;
	icon: React.ReactNode;
}

export const CardDashboard = ({ icon, name, value }: Props) => {
	return (
		<div className='p-4 bg-white rounded-md'>
			<div className='border-l-4 pl-4 border-purple-600 rounded-sm 
			flex items-center justify-between'>
				<div className='space-y-1'>
					<TypographyH4 className='text-slate-400 text-lg'>
						{name}
					</TypographyH4>
					<TypographyP className='text-2xl font-bold text-gray-900'>
						{value}
					</TypographyP>
				</div>

				<div className='flex items-center justify-center p-2 
				text-purple-600 bg-purple-200 size-10 rounded-md'>
					{icon}
				</div>
			</div>
		</div>
	);
};
