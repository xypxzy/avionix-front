import Footer from '@/src/components/common/Footer/Footer'
import Header from '@/src/components/common/Header/Header'
import { ReactNode } from 'react';

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className='container flex min-h-dvh flex-col'>
			<Header />
			<main className='my-5 flex flex-1 flex-col space-y-5'>{children}</main>
			<Footer />
		</div>
	)
}
