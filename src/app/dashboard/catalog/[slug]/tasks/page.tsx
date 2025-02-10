import { Tasks } from '@/features/dashboard/catalog/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Задания',
}

export default async function SettingsPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	return <Tasks slug={slug} label={'Задания'} />
}
