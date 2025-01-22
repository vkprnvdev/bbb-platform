import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui'
import { Icons } from './multi-select'

export function ExamTabs() {
	return (
		<Tabs defaultValue='OGE' className='w-[400px]'>
			<TabsList>
				<TabsTrigger value='OGE'>ОГЭ</TabsTrigger>
				<TabsTrigger value='EGE'>ЕГЭ</TabsTrigger>
			</TabsList>
			<TabsContent value='OGE'></TabsContent>
			<TabsContent value='EGE'></TabsContent>
		</Tabs>
	)
}
