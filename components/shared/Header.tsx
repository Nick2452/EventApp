import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import NavItems from './NavItems'

const Header = () => {
	return (
		<header className='w-full border-b'>
			<div className='wrapper flex items-center gap-4 justify-between'>
				<Link href='/' className='w-40'>
					<Image
						src='/assets/images/logo.svg'
						width={178}
						height={48}
						alt='logo'
					/>
				</Link>
				<SignedIn>
					<nav className='md:flex-between hidden w-full max-w-xs'>
						<NavItems />
					</nav>
				</SignedIn>
				<div className='flex justify-end gap-3'>
					<SignedIn>
						<UserButton afterSignOutUrl='/' />
						<MobileNav />
					</SignedIn>
					<SignedOut>
						<Button asChild className='rounded-full' size='lg'>
							<Link href='/sign-in'>Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	)
}

export default Header
