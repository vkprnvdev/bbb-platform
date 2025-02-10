import { Tests } from '@/features/dashboard/catalog/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Тесты',
}

export default async function SettingsPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	return <Tests slug={slug} label={'Тесты'} />
}
