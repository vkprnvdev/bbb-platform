import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/shared/components/ui'
import {
	Bell,
	ChartNoAxesCombined,
	ChevronDown,
	MessageCircleMore,
	UserRound,
} from 'lucide-react'

export function Profile() {
	return (
		<div className='h-full flex items-center justify-between gap-[15px] mx-[13px]'>
			<Bell className='cursor-pointer' />
			<div className='h-full w-px bg-[#BEBEBE]'></div>
			<Avatar>
				<AvatarImage src='#' />
				<AvatarFallback className='bg-fill-gray-2'>ИИ</AvatarFallback>
			</Avatar>
			<span>Иван Иванович</span>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<ChevronDown className='cursor-pointer' />
				</DropdownMenuTrigger>
				<DropdownMenuContent className='mt-[16px] w-[233px] border-t-0 border-l-px shadow-none bg-fill-white-1 rounded-t-none'>
					<DropdownMenuItem className='cursor-pointer focus:bg-fill-gray-2'>
						<UserRound />
						Личный кабинет
					</DropdownMenuItem>
					<DropdownMenuItem className='cursor-pointer focus:bg-fill-gray-2'>
						<ChartNoAxesCombined />
						Статистика
					</DropdownMenuItem>
					<DropdownMenuItem className='cursor-pointer focus:bg-fill-gray-2'>
						<MessageCircleMore />
						Форум
					</DropdownMenuItem>
					<DropdownMenuSeparator className='bg-[#BEBEBE]' />
					<DropdownMenuItem className='cursor-pointer focus:bg-fill-gray-2 text-red-400'>
						Выйти
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
