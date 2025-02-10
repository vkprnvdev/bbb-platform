import { List } from './List'
import { MiniHeader } from './MiniHeader'
import { Wrapper } from './Wrapper'

interface Props {
	slug: string
	label: string
}

export function Videos({ slug, label }: Props) {
	return (
		<Wrapper className='flex flex-col gap-[30px] text-[#5D5D5D]'>
			<MiniHeader label={label} slug={slug} />
			<List label='Задание №1' blockCount={10} />
			<List label='Задание №2' blockCount={10} />
			<List label='Задание №3' blockCount={10} />
		</Wrapper>
	)
}
