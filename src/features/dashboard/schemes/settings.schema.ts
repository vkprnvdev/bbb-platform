import { z } from 'zod'

export const SettingsSchema = z.object({
	role: z.enum(['ADMIN', 'TEACHER', 'STUDENT']),
	name: z.string({
		message: 'Некорректное имя',
	}),
	subjects: z.string().array().nonempty({
		message: 'Выберите хотя бы один предмет',
	}),
	exam: z.enum(['OGE', 'EGE']),
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>
