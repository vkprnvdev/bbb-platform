import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface Props {
	label: string
	slug: string
}

export function MiniHeader({ label, slug }: Props) {
	return (
		<div className='relative flex items-center'>
			<Link href={`/dashboard/catalog/${slug}`} className='absolute'>
				<div className='flex items-center'>
					<ChevronLeft />
					<span className='text-[24px]'>Назад</span>
				</div>
			</Link>
			<span className='text-[32px] m-auto'>{label}</span>
		</div>
	)
}
