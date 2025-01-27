import { Header } from '@/features/dashboard/catalog/components/header/Header'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex flex-col w-full bg-fill-white-1'>
			<Header />
			{children}
		</div>
	)
}
