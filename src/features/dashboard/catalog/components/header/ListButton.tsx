import { Button } from '@/shared/components/ui'
import Link from 'next/link'

interface ListButtonProps {
	label: string
	isSelected: boolean
	href: string
}

export function ListButton({ label, isSelected, href }: ListButtonProps) {
	return (
		<>
			{isSelected ? (
				<Link href={`/dashboard/catalog/${href}`}>
					<Button
						variant='ghost'
						className='text-base h-full rounded-none hover:border-b-2 hover:border-b-black flex items-end border-b-2 border-b-black text-black'
					>
						{label}
					</Button>
				</Link>
			) : (
				<Link href={`/dashboard/catalog/${href}`}>
					<Button
						variant='ghost'
						className='text-base h-full rounded-none hover:border-b-2 hover:border-b-black flex items-end'
					>
						{label}
					</Button>
				</Link>
			)}
		</>
	)
}
