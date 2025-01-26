import { Button } from '@/shared/components/ui'

interface ListButtonProps {
	label: string
}

export function ListButton({ label }: ListButtonProps) {
	return (
		<Button
			variant='ghost'
			className='text-base h-full rounded-none hover:border-b-2 hover:border-b-black flex items-end'
		>
			{label}
		</Button>
	)
}
