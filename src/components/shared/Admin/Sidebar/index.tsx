'use client'

import { cn } from '@/src/shared/utils/classnames'
import { Inbox, PieChart, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import SidebarLinkGroup from './SidebarLinkGroup'

const Sidebar = () => {
	const pathname = usePathname()

	const getIsActiveItem = (check: string): boolean => {
		return check === pathname.split('/').pop()
	}

	return (
		<aside
			className={`absolute left-0 top-0 flex h-full w-72 flex-col overflow-y-hidden  duration-300 ease-linear lg:static lg:translate-x-0 ${'-translate-x-full'}`}
		>
			<nav className='flex flex-col overflow-y-auto p-4 duration-300 ease-linear lg:px-6'>
				<ul className='mb-6 flex flex-col gap-4'>
					<SidebarLinkGroup activeCondition={getIsActiveItem('admin')}>
						{open => {
							return (
								<React.Fragment>
									<Link
										href='/admin'
										className={cn(
											'group relative flex items-center gap-2.5  px-5 py-2 rounded-md font-medium text-black duration-300 ease-in-out ',
											{
												'bg-[#0E1036] text-white': getIsActiveItem('admin'),
											}
										)}
									>
										<PieChart />
										Dashboard
									</Link>
								</React.Fragment>
							)
						}}
					</SidebarLinkGroup>
					<SidebarLinkGroup activeCondition={getIsActiveItem('inbox')}>
						{open => {
							return (
								<React.Fragment>
									<Link
										href='/admin/inbox'
										className={cn(
											'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black duration-300 ease-in-out ',
											{
												'bg-[#0E1036] text-white px-5 py-2':
													getIsActiveItem('inbox'),
											}
										)}
									>
										<Inbox />
										Inbox
									</Link>
								</React.Fragment>
							)
						}}
					</SidebarLinkGroup>
					<SidebarLinkGroup activeCondition={getIsActiveItem('users')}>
						{open => {
							return (
								<React.Fragment>
									<Link
										href='/admin/users'
										className={cn(
											'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black duration-300 ease-in-out ',
											{
												'bg-[#0E1036] text-white px-5 py-2':
													getIsActiveItem('users'),
											}
										)}
									>
										<Users />
										Users
									</Link>
								</React.Fragment>
							)
						}}
					</SidebarLinkGroup>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
