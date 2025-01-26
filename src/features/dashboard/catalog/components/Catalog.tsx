import { List } from './List'
import { Wrapper } from './Wrapper'

export function Catalog() {
	return (
		<Wrapper className='flex flex-col gap-[30px] text-[#5D5D5D]'>
			<List label='Видеоуроки' buttonLabel='Все видеоуроки' />
			<List label='Презентации' buttonLabel='Все презентации' />
			<List label='Задания' buttonLabel='Все задания' />
			<List label='Тесты' buttonLabel='Все тесты' />
		</Wrapper>
	)
}
