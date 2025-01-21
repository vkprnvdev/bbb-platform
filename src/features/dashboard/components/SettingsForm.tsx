'use client'

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
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
		<Tabs defaultValue='student' className='w-[400px]'>
			<Card>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
						<CardHeader>
							<CardTitle>Идентификация</CardTitle>
							<CardDescription>Кто вы?</CardDescription>
							<TabsList>
								<TabsTrigger value='student'>Ученик</TabsTrigger>
								<TabsTrigger value='teacher'>Учитель</TabsTrigger>
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
						</CardHeader>
						<CardContent>
							<TabsContent value='teacher'>
								<FormField
									control={form.control}
									name='subjects'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className='h-[50px] text-xl rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1'
													placeholder='предметы'
													type='text'
													{...field}
												/>
											</FormControl>
											<FormMessage className='leading-none pl-3' />
										</FormItem>
									)}
								/>
							</TabsContent>
							<TabsContent value='student'>
								<FormField
									control={form.control}
									name='exam'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input
													className='h-[50px] text-xl rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1'
													placeholder='Егэ'
													type='text'
													{...field}
												/>
											</FormControl>
											<FormMessage className='leading-none pl-3' />
										</FormItem>
									)}
								/>
							</TabsContent>
							{/* <TeacherForm /> */}
							{/* <StudentForm /> */}
						</CardContent>
						<CardFooter className='px-9 py-0'>
							<Button
								type='submit'
								className='bg-fill-gray-1 w-full h-[50px] text-xl rounded-[15px]'
							>
								Подтвердить
							</Button>
						</CardFooter>
					</form>
				</Form>
			</Card>
		</Tabs>
	)
}
