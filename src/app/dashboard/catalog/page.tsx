import { Catalog } from '@/features/dashboard/catalog/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Каталог',
}

export default function SettingsPage() {
	return <Catalog />
}
