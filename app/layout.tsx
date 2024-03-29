import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
const popins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
})

export const metadata: Metadata = {
	title: 'Events App',
	description: 'Generated by create next app',
	icons: {
		icon: '/assets/images/logo.svg',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={popins.className}>{children}</body>
			</html>
		</ClerkProvider>
	)
}
