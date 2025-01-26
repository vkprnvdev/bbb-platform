import { Container } from './Container'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { SubjectsList } from './SubjectsList'

export function Header() {
	return (
		<header className='h-[65px] w-full bg-fill-white-1'>
			<Container className='h-full w-full flex items-center justify-between'>
				<Logo />
				<SubjectsList />
				<Profile />
			</Container>
		</header>
	)
}
