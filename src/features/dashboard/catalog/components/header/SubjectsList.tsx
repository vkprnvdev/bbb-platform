import { ListButton } from './ListButton'

export function SubjectsList() {
	return (
		<div className='h-full flex items-center flex-1'>
			<ListButton label='Профильная математика' />
			<ListButton label='Русский язык' />
			<ListButton label='Информатика' />
			<ListButton label='Физика' />
		</div>
	)
}
