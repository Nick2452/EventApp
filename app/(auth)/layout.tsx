const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='min-h-screen flex-center justify-center bg-primary-50 bg-cover bg-center bg-fixed bg-dotted-pattern'>
			{children}
		</div>
	)
}

export default Layout
