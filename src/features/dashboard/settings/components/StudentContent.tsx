import {
	CardDescription,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui'
import { UseFormReturn } from 'react-hook-form'
import { TypeSettingsSchema } from '../schemes/settings.schema'
import { Icons, MultiSelect } from './multi-select'

const subjectsList = [
	{
		value: 'base_math',
		label: 'Базовая математика',
		icon: Icons.divide,
	},
	{
		value: 'russian_lang',
		label: 'Русский язык',
		icon: Icons.bookA,
	},
	{
		value: 'profile_math',
		label: 'Профильная математика',
		icon: Icons.radical,
	},
	{
		value: 'physics',
		label: 'Физика',
		icon: Icons.atom,
	},
	{
		value: 'computer_science',
		label: 'Информатика',
		icon: Icons.binary,
	},
]

interface StudentContentProps {
	form: UseFormReturn<TypeSettingsSchema, any, undefined>
	onTabExamChange: (value: string) => void
}

export function StudentContent({ form, onTabExamChange }: StudentContentProps) {
	return (
		<TabsContent value='STUDENT'>
			<Tabs
				defaultValue='OGE'
				onValueChange={value => onTabExamChange(value)}
				className='flex flex-col items-center'
			>
				<CardDescription className='text-xl font-bold text-font-black my-1'>
					К чему вы собираетесь готовиться?
				</CardDescription>
				<TabsList className='w-[432px] h-[50px] mb-2 text-xl rounded-[15px] border border-fill-gray-1 justify-between p-0'>
					<TabsTrigger
						className='h-[49px] w-[215px] rounded-[15px] data-[state=active]:shadow-none data-[state=active]:bg-fill-gray-1 data-[state=active]:text-font-white'
						value='OGE'
					>
						ОГЭ
					</TabsTrigger>
					<TabsTrigger
						className='h-[49px] w-[215px] rounded-[15px] data-[state=active]:shadow-none data-[state=active]:bg-fill-gray-1 data-[state=active]:text-font-white'
						value='EGE'
					>
						ЕГЭ
					</TabsTrigger>
				</TabsList>
			</Tabs>
			<FormField
				control={form.control}
				name='subjects'
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<MultiSelect
								className='min-h-[50px] text-xl rounded-[15px] border-fill-gray-1 placeholder-fill-gray-1 focus-visible:ring-fill-gray-1 font-normal'
								options={subjectsList}
								onValueChange={field.onChange}
								defaultValue={field.value}
								placeholder='Выберите предметы'
								variant='inverted'
								// animation={2}
								maxCount={3}
							/>
						</FormControl>
						<FormMessage className='leading-none pl-3' />
					</FormItem>
				)}
			/>
		</TabsContent>
	)
}
