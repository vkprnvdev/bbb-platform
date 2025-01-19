'use client'

import { Button } from '@/shared/components/ui'
import { useRouter } from 'next/navigation'
import { FaGoogle, FaYandex } from 'react-icons/fa'

export function AuthSocial() {
	const router = useRouter()

	// const { mutateAsync } = useMutation({
	// 	mutationKey: ['oauth'],
	// 	mutationFn: async (provider: 'google' | 'yandex') =>
	// 		await authService.oauthByProvider(provider),
	// })

	// const onClick = async (provider: 'google' | 'yandex') => {
	// 	const response = await mutateAsync(provider)

	// 	if (response) {
	// 		router.push(response.url)
	// 	}
	// }

	return (
		<>
			<div className='grid grid-cols-2 gap-6'>
				{/* <Button variant='outline' onClick={() => onClick('google')}> */}
				<Button variant='outline' className='rounded-[15px] border-fill-gray-1'>
					<FaGoogle className='size-4' />
					Google
				</Button>
				{/* <Button variant='outline' onClick={() => onClick('yandex')}> */}
				<Button variant='outline' className='rounded-[15px] border-fill-gray-1'>
					<FaYandex className='size-4' />
					Yandex
				</Button>
			</div>
			<div className='relative mb-2 space-y-2'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t bg-fill-gray-1' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background px-2 text-muted-foreground text-font-gray'>
						Или
					</span>
				</div>
			</div>
		</>
	)
}
