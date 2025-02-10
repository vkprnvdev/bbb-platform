import { Videos } from '@/features/dashboard/catalog/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Видео',
}

export default async function SettingsPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	return <Videos slug={slug} label={'Видеоуроки'} />
}
