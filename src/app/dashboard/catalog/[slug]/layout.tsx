import { Header } from '@/features/dashboard/catalog/components/header/Header'
import { type ReactNode } from 'react'

export default async function Layout({
	children,
	params,
}: {
	children: ReactNode
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	return (
		<div className='flex flex-col w-full bg-fill-white-1'>
			<Header slug={slug} />
			{children}
		</div>
	)
}
