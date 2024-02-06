import Footer from '@/components/shared/Footer/Footer'
import Header from '@/components/shared/Header/Header'
import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className='container flex min-h-dvh flex-col'>
			<Header />
			<main className='flex-1 my-5'>{children}</main>
			<Footer />
		</div>
	)
}
