'use client'

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Input,
	PasswordField,
} from '@/shared/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { LoginSchema, TypeLoginSchema } from '../schemes'
import { AuthWrapper } from './AuthWrapper'

export function LoginForm() {
	const router = useRouter()

	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypeLoginSchema>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (values: TypeLoginSchema) => {
		if (recaptchaValue) {
			console.log(values)
			router.push('/dashboard/settings')
		} else {
			toast.error('Пожалуйста, пройдите recaptcha')
		}
	}

	return (
		<AuthWrapper
			heading='Вход'
			backButtonLabel='Нет аккаунта? - Зарегистрироваться'
			backButtonHref='/auth/register'
			isShowSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className='h-[50px] text-xl rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1'
										placeholder='Электронная почта'
										type='email'
										{...field}
									/>
								</FormControl>
								<FormMessage className='leading-none pl-3' />
							</FormItem>
						)}
					/>
					{/* <FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className='h-[50px] rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1'
										placeholder='Пароль'
										type='password'
										{...field}
									/>
									<PasswordInput
										className='h-[50px] rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1'
										placeholder='Пароль'
										type='password'
									></PasswordInput>
								</FormControl>
								<FormMessage className='leading-none pl-3' />
							</FormItem>
						)}
					/> */}
					<PasswordField placeholder='Пароль' />
					<div className='flex justify-center pt-1'>
						<ReCAPTCHA
							sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string}
							onChange={setRecaptchaValue}
							theme='light'
						/>
					</div>
					<Button
						type='submit'
						className='bg-fill-gray-1 w-full h-[50px] text-xl rounded-[15px]'
					>
						Подтвердить
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
