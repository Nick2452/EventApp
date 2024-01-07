import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

function MobileNav() {
	return (
		<nav className='md:hidden'>
			<Sheet>
				<SheetTrigger className='align-middle'>
					<Image
						src='/assets/icons/menu.svg'
						width={30}
						height={28}
						alt='menu'
					/>
				</SheetTrigger>
				<SheetContent className='bg-white md:hidden flex flex-col gap-4'>
					<Image
						src='/assets/images/logo.svg'
						alt='logo'
						width={140}
						height={38}
						className='cursor-pointer'
					/>
					<Separator className='border bg-grey-400' />
					<NavItems />
				</SheetContent>
			</Sheet>
		</nav>
	)
}

export default MobileNav
