import Header from '@/src/components/common/Header/Header'
import Sidebar from '@/src/components/shared/Admin/Sidebar'
import { ReactNode } from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<div className='relative mx-auto flex max-w-screen-2xl flex-1 flex-col overflow-y-auto overflow-x-hidden'>
			<Header />
			<div className='flex h-full min-h-dvh overflow-hidden'>
				<Sidebar />
				<main>
					<div className='w-full p-4 md:p-6 2xl:p-10'>{children}</div>
				</main>
			</div>
		</div>
	)
}
