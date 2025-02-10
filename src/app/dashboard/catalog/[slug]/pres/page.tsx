import { Pres } from '@/features/dashboard/catalog/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Презентации',
}

export default async function SettingsPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	return <Pres slug={slug} label={'Презентации'} />
}
