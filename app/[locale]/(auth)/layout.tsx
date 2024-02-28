import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<main className='container p-8'>
			All child
			{children}
		</main>
	)
}
