import {
	CardDescription,
	CardTitle,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Input,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui'
import { UseFormReturn } from 'react-hook-form'
import { TypeSettingsSchema } from '../schemes/settings.schema'

interface BaseContentProps {
	form: UseFormReturn<TypeSettingsSchema, any, undefined>
}

export function BaseContent({ form }: BaseContentProps) {
	return (
		<>
			<div className='flex flex-col items-center'>
				<CardTitle className='text-4xl'>Идентификация</CardTitle>
				<CardDescription className='text-xl font-bold text-font-black my-1'>
					Кто вы?
				</CardDescription>
			</div>
			<TabsList className='w-full h-[50px] mb-2 text-xl rounded-[15px] border border-fill-gray-1 justify-between p-0'>
				<TabsTrigger
					className='h-[49px] w-[215px] rounded-[15px] data-[state=active]:shadow-none data-[state=active]:bg-fill-gray-1 data-[state=active]:text-font-white'
					value='STUDENT'
				>
					Ученик
				</TabsTrigger>
				<TabsTrigger
					className='h-[49px] w-[215px] rounded-[15px] data-[state=active]:shadow-none data-[state=active]:bg-fill-gray-1 data-[state=active]:text-font-white'
					value='TEACHER'
				>
					Учитель
				</TabsTrigger>
			</TabsList>
			<FormField
				control={form.control}
				name='name'
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								className='h-[50px] text-xl rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1'
								placeholder='ФИО'
								type='text'
								{...field}
							/>
						</FormControl>
						<FormMessage className='leading-none pl-3' />
					</FormItem>
				)}
			/>
		</>
	)
}
