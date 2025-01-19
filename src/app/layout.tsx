import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'BBB Platform',
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
				<div className='relative flex min-h-screen flex-col bg-back'>
					<div className='flex h-screen w-full items-center justify-center px-4'>
						{children}
					</div>
				</div>
			</body>
		</html>
	)
}
