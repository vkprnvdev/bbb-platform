import { Button } from '@/shared/components/ui'

interface ListButtonProps {
	label: string
}

export function ListButton({ label }: ListButtonProps) {
	return (
		<Button
			variant='ghost'
			className='text-base w-56 h-full rounded-none hover:border-b-2 hover:border-b-black hover:bg-fill-gray-2'
		>
			{label}
		</Button>
	)
}
