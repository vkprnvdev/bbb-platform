import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	TabsContent,
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

interface TeacherContentProps {
	form: UseFormReturn<TypeSettingsSchema, any, undefined>
}

export function TeacherContent({ form }: TeacherContentProps) {
	return (
		<TabsContent value='teacher'>
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
