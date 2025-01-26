import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex h-screen w-full items-center justify-center px-4'>
			{children}
		</div>
	)
}
