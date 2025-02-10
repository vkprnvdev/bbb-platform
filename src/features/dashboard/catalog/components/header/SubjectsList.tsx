import { ListButton } from './ListButton'

export function SubjectsList({ slug }: { slug: string }) {
	return (
		<div className='ml-[30px] h-full flex-1 flex gap-[30px]'>
			<ListButton
				label='Профильная математика'
				isSelected={slug == 'math'}
				href='math'
			/>
			<ListButton
				label='Русский язык'
				isSelected={slug == 'rulang'}
				href='rulang'
			/>
			<ListButton label='Информатика' isSelected={slug == 'cs'} href='cs' />
			<ListButton label='Физика' isSelected={slug == 'phy'} href='phy' />
		</div>
	)
}
