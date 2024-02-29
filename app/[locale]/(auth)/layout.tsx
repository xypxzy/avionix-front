import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<>
			<main className='container flex h-screen flex-col items-center justify-center space-y-14'>
				{children}
			</main>
		</>
	)
}
