import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<>
			<main className='flex h-screen items-center space-y-14'>{children}</main>
		</>
	)
}
