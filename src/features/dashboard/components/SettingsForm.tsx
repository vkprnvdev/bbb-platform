'use client'

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Input,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	SettingsSchema,
	type TypeSettingsSchema,
} from '../schemes/settings.schema'
import { Icons, MultiSelect } from './multi-select'

const subjectsList = [
	{
		value: 'base_math',
		label: 'Базовая математика',
		icon: Icons.rabbit,
	},
	{
		value: 'russian_lang',
		label: 'Русский язык',
		icon: Icons.fish,
	},
	{
		value: 'profile_math',
		label: 'Профильная математика',
		icon: Icons.dog,
	},
	{
		value: 'physics',
		label: 'Физика',
		icon: Icons.turtle,
	},
	{
		value: 'computer_science',
		label: 'Информатика',
		icon: Icons.cat,
	},
]

export function SettingsForm() {
	const form = useForm<TypeSettingsSchema>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			role: 'STUDENT',
			name: '',
			subjects: [],
			exam: 'EGE',
		},
	})

	const onSubmit = (values: TypeSettingsSchema) => {
		console.log(values)
		// router.push('/dashboard/settings')
	}
	return (
		<Tabs defaultValue='student' className='w-[506px]'>
			<Card className='px-[36px] py-[30px] rounded-[60px]'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
						<CardContent className='p-0'>
							<div className='flex flex-col items-center'>
								<CardTitle className='text-4xl'>Идентификация</CardTitle>
								<CardDescription className='text-xl font-bold text-font-black my-1'>
									Кто вы?
								</CardDescription>
							</div>
							<TabsList className='w-full h-[50px] mb-2 text-xl rounded-[15px] border border-fill-gray-1 justify-between p-0'>
								<TabsTrigger
									className='h-[49px] w-[215px] rounded-[15px] data-[state=active]:shadow-none data-[state=active]:bg-fill-gray-1 data-[state=active]:text-font-white'
									value='student'
								>
									Ученик
								</TabsTrigger>
								<TabsTrigger
									className='h-[49px] w-[215px] rounded-[15px] data-[state=active]:shadow-none data-[state=active]:bg-fill-gray-1 data-[state=active]:text-font-white'
									value='teacher'
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
							<TabsContent value='teacher'>
								<FormField
									control={form.control}
									name='subjects'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<MultiSelect
													className='min-h-[50px] text-xl rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1 font-normal'
													options={subjectsList}
													onValueChange={field.onChange}
													defaultValue={field.value}
													placeholder='Выберите предметы'
													variant='inverted'
													// animation={2}
													maxCount={3}
												/>
											</FormControl>
											<FormMessage className='leading-none pl-3' />
										</FormItem>
									)}
								/>
							</TabsContent>
							<TabsContent value='student'></TabsContent>
							<Button
								type='submit'
								className='bg-fill-gray-1 w-full h-[50px] text-xl rounded-[15px] mt-2'
							>
								Подтвердить
							</Button>
						</CardContent>
					</form>
				</Form>
			</Card>
		</Tabs>
	)
}
