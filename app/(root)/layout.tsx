import Footer from '@/components/shared/Footer/Footer'
import Header from '@/components/shared/Header/Header'
import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<>
			<main className='container flex min-h-dvh flex-col'>
				<Header />
				<section className='flex-1'>{children}</section>
				<Footer />
			</main>
		</>
	)
}
