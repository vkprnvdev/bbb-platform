import { z } from 'zod'

export const SettingsSchema = z.object({
	role: z.enum(['ADMIN', 'TEACHER', 'STUDENT']),
	name: z.string().nonempty({
		message: 'Некорректное имя',
	}),
	subjects: z
		.array(z.string().min(1))
		.min(1)
		.nonempty('Выберите хотя бы один предмет'),
	exam: z.enum(['OGE', 'EGE']),
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>
