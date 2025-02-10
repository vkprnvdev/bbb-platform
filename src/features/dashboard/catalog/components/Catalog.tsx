import { List } from './List'
import { Wrapper } from './Wrapper'

export function Catalog({ slug }: { slug: string }) {
	return (
		<Wrapper className='flex flex-col gap-[30px] text-[#5D5D5D]'>
			<List
				label='Видеоуроки'
				buttonLabel='Все видеоуроки'
				blockCount={5}
				slug={slug}
				slug2='videos'
			/>
			<List
				label='Презентации'
				buttonLabel='Все презентации'
				blockCount={5}
				slug={slug}
				slug2='pres'
			/>
			<List
				label='Задания'
				buttonLabel='Все задания'
				blockCount={5}
				slug={slug}
				slug2='tasks'
			/>
			<List label='Тесты' buttonLabel='Все тесты' blockCount={5} slug={slug} />
		</Wrapper>
	)
}
