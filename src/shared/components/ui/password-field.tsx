'use client'

import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { createElement, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Box } from './box'
import { FormControl, FormField, FormItem, FormMessage } from './form'
import { Input } from './input'

type PasswordFieldProps = {
	name?: string
	placeholder: string
}

export function PasswordField({
	name = 'password',
	placeholder,
}: PasswordFieldProps) {
	const { control, getFieldState } = useFormContext()
	const [passwordVisibility, setPasswordVisibility] = useState(false)

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormControl>
						<Box className='relative'>
							<Input
								{...field}
								type={passwordVisibility ? 'text' : 'password'}
								autoComplete='on'
								placeholder={placeholder}
								className={
									'pr-12 h-[50px] text-xl rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1'
								}
							/>
							<Box
								className='absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground'
								onClick={() => setPasswordVisibility(!passwordVisibility)}
							>
								{createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
									className: 'h-6 w-6',
								})}
							</Box>
						</Box>
					</FormControl>
					<FormMessage className='leading-none pl-3' />
				</FormItem>
			)}
		/>
	)
}
