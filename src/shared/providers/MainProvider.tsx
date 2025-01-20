'use client'

import { type PropsWithChildren } from 'react'
// import { TanstackQueryProvider } from './TanstackQueryProvider'
import { ToastProvider } from './ToastProvider'

export function MainProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			{/* <TanstackQueryProvider> */}
			{/* <ThemeProvider
				attribute='class'
				defaultTheme='system'
				disableTransitionOnChange
				// storageKey='teacoder-theme'
			>
				{children}
			</ThemeProvider> */}
			{/* <ToastProvider /> */}
			{/* {children} */}
			{/* </TanstackQueryProvider> */}
			<ToastProvider />
			{children}
		</>
	)
}
