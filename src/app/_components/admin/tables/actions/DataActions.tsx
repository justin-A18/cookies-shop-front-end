import { Button } from '@/app/_components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

export const DataActions = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className='bg-purple-300 hover:bg-purple-500
				outline-none focus:outline-none hover:text-white'>
				<Button
					variant='ghost'
					className='h-8 w-8 p-0'>
					<DotsHorizontalIcon className='h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='bg-purple-300 border-none 
			text-black'>
				<DropdownMenuLabel>Acciones</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Visualizar</DropdownMenuItem>
				<DropdownMenuItem>Editar</DropdownMenuItem>
				<DropdownMenuItem>Eliminar</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
