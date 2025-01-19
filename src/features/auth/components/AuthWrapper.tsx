import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/components/ui'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { AuthSocial } from './AuthSocial'

interface AuthWrapperProps {
	heading: string
	description?: string
	backButtonLabel?: string
	backButtonHref?: string
	isShowSocial?: boolean
}

export function AuthWrapper({
	heading,
	description,
	backButtonLabel,
	backButtonHref,
	isShowSocial,
	children,
}: PropsWithChildren<AuthWrapperProps>) {
	return (
		<Card className='w-[450px] rounded-[45px] py-[6px]'>
			<CardHeader className='py-0 px-9'>
				<CardTitle className='text-[40px]'>{heading}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent className='px-9 py-1'>
				{isShowSocial && <AuthSocial />}
				{children}
			</CardContent>
			<CardFooter className='px-9 py-0'>
				{backButtonLabel && backButtonHref && (
					<Button variant='link' className='w-full font-normal text-[14px]'>
						<Link href={backButtonHref}>{backButtonLabel}</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}
