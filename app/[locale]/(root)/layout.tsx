import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className='container flex min-h-dvh flex-col'>
			<Header />
			<main className='my-5 flex-1'>{children}</main>
			<Footer />
		</div>
	)
}
