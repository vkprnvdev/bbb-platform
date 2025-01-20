'use client'

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
			email: '',
			password: '',
		},
	})

	return <div>SettingsForm</div>
}
