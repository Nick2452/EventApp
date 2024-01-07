import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='border'>
			<div className='wrapper flex-center flex-between items-center p-5 flex-col gap-4 sm:flex-row'>
				<Link href='/'>
					<Image
						src='/assets/images/logo.svg'
						alt='logo'
						width={128}
						height={38}
					/>
				</Link>
				<p className='font-bold'>
					<span className='text-primary-500'>2023 Events.</span> All reserved
				</p>
			</div>
		</footer>
	)
}

export default Footer
