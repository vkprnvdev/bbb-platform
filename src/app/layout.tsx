import { MainProvider } from '@/shared/providers'
import '@/shared/styles/globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'HardSkills',
	description: 'Perfect platform for exam preparation.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${rubik.className} antialiased`}>
				<MainProvider>
					<div className='relative flex min-h-screen flex-col bg-back'>
						{children}
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
