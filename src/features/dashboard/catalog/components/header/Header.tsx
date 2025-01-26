import { Container } from './Container'
import { Profile } from './Profile'
import { SubjectsList } from './SubjectsList'

export function Header() {
	return (
		<header className='h-[54px] w-full bg-fill-white-1 text-[#5D5D5D] border-b-[1px] border-b-[#BEBEBE]'>
			<Container className='h-full w-full flex items-center justify-between'>
				{/* <Logo /> */}
				<SubjectsList />
				<Profile />
			</Container>
		</header>
	)
}
