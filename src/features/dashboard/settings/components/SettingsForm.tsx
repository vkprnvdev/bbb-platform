'use client'

import { Button, Card, CardContent, Form, Tabs } from '@/shared/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
	SettingsSchema,
	type TypeSettingsSchema,
} from '../schemes/settings.schema'
import { BaseContent } from './BaseContent'
import { StudentContent } from './StudentContent'
import { TeacherContent } from './TeacherСontent'

export function SettingsForm() {
	const router = useRouter()
	const [tabRole, setTabRole] = useState<string>('STUDENT')
	const [tabExam, setTabExam] = useState<string>('OGE')

	const onTabRoleChange = (value: string) => {
		setTabRole(value)
	}

	const onTabExamChange = (value: string) => {
		setTabExam(value)
	}

	const form = useForm<TypeSettingsSchema>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			role: 'STUDENT',
			name: '',
			subjects: [],
			exam: 'OGE',
		},
	})

	const onSubmit = (values: TypeSettingsSchema) => {
		const val = { ...values, role: tabRole, exam: tabExam }
		toast.message(`Добро пожаловать, ${val.name}`)
		router.push('/dashboard/catalog')
	}
	return (
		<Tabs
			onValueChange={value => onTabRoleChange(value)}
			defaultValue='STUDENT'
			className='w-[506px]'
		>
			<Card className='px-[36px] py-[30px] rounded-[60px]'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
						<CardContent className='p-0'>
							<BaseContent form={form} />
							<TeacherContent form={form} />
							<StudentContent form={form} onTabExamChange={onTabExamChange} />
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
