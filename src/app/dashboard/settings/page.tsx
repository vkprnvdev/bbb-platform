import { SettingsForm } from '@/features/dashboard/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Настройки',
}

export default function SettingsPage() {
	return <SettingsForm />
}
