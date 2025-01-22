import { z } from 'zod'

export const SettingsSchema = z.object({
	role: z.enum(['ADMIN', 'TEACHER', 'STUDENT']),
	name: z.string().nonempty({
		message: 'Некорректное имя',
	}),
	// subjects: z.string().array().nonempty({
	// 	message: 'Выберите хотя бы один предмет',
	// }),
	subjects: z
		.array(z.string().min(1))
		.min(1)
		.nonempty('Please select at least one subject.'),
	exam: z.enum(['OGE', 'EGE']),
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>
