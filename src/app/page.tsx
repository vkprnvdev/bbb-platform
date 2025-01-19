import { Button } from '@/shared/components/ui'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col gap-10'>
			<Button>
				<Link href={'bbb-platform/auth/login'}>Login</Link>
			</Button>
			<Button>
				<Link href={'bbb-platform/auth/register'}>Register</Link>
			</Button>
		</div>
	)
}
