import { ChevronRight } from 'lucide-react'

interface ListProps {
	label: string
	buttonLabel: string
}

export function List({ label, buttonLabel }: ListProps) {
	return (
		<div className='relative h-[223px] border-2 border-[#BEBEBE] rounded-[20px] p-[20px]'>
			<div className='absolute -top-[12px] left-[37px] text-[20px] bg-fill-white-1 leading-none px-1 font-bold'>
				{label}
			</div>
			<div className='absolute -top-[15px] right-[59px] bg-fill-white-1 leading-none px-1 text-[16px] flex items-center rounded-[10px] border-2 border-[#BEBEBE] py-1 cursor-pointer font-bold'>
				{buttonLabel}
				<ChevronRight size={15} />
			</div>
			<div className='grid grid-cols-5 gap-[10px] h-full'>
				<div className='bg-fill-gray-2 rounded-[17px]'></div>
				<div className='bg-fill-gray-2 rounded-[17px]'></div>
				<div className='bg-fill-gray-2 rounded-[17px]'></div>
				<div className='bg-fill-gray-2 rounded-[17px]'></div>
				<div className='bg-fill-gray-2 rounded-[17px]'></div>
			</div>
		</div>
	)
}
