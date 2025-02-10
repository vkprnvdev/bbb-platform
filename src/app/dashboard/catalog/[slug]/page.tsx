import { Catalog } from '@/features/dashboard/catalog/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Каталог',
}

export default async function SettingsPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	return <Catalog slug={slug} />
}
