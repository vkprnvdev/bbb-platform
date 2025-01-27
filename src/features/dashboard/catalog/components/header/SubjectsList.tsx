import { ListButton } from './ListButton'

export function SubjectsList() {
	return (
		<div className='ml-[30px] h-full flex-1 flex gap-[30px]'>
			<ListButton label='Профильная математика' />
			<ListButton label='Русский язык' />
			<ListButton label='Информатика' />
			<ListButton label='Физика' />
		</div>
	)
}
