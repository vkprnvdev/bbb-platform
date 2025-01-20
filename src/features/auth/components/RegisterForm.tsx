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
import { RegisterSchema, TypeRegisterSchema } from '../schemes/register.schema'
import { AuthWrapper } from './AuthWrapper'

export function RegisterForm() {
	const router = useRouter()

	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

	const form = useForm<TypeRegisterSchema>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: '',
			password: '',
			passwordRepeat: '',
		},
	})

	// const { register, isLoadingRegister } = useRegisterMutation()

	const onSubmit = (values: TypeRegisterSchema) => {
		if (recaptchaValue) {
			// register({ values, recaptcha: recaptchaValue })
			console.log(values)
			router.push('/dashboard/settings')
		} else {
			toast.error('Пожалуйста, пройдите recaptcha')
		}
	}

	return (
		<AuthWrapper
			heading='Регистрация'
			backButtonLabel='Уже есть аккаунт? - Войти'
			backButtonHref='/auth/login'
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
										className='h-[50px] rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 text-xl focus-visible:ring-fill-gray-1'
										placeholder='Электронная почта'
										type='email'
										// disabled={isLoadingRegister}
										{...field}
									/>
								</FormControl>
								<FormMessage className='leading-none pl-3' />
							</FormItem>
						)}
					/>
					<PasswordField name='password' placeholder='Пароль' />
					<PasswordField name='passwordRepeat' placeholder='Подтверждение пароля' />
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
						// disabled={isLoadingRegister}
					>
						Подтвердить
					</Button>
				</form>
			</Form>
		</AuthWrapper>
	)
}
