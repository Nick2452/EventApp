'use client'

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItems() {
	const pathname = usePathname()
	return (
		<ul className='md:flex-between flex w-full gap-4 flex-col items-start md:flex-row'>
			{headerLinks.map(link => {
				const isActive = pathname === link.route
				return (
					<li
						key={link.route}
						className={`${
							isActive &&
							'text-primary-500 flex-center whitespace-nowrap p-medium-16'
						}`}
					>
						<Link href={link.route}>{link.label}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default NavItems
