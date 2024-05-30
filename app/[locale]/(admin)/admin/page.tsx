'use client'

import ChartThree from '@/src/components/shared/Admin/Charts/ChartThree'
import ChartTwo from '@/src/components/shared/Admin/Charts/ChartTwo'
import { Stats } from '@/src/components/shared/Admin/Stats/Stats'
import AdminService from '@/src/services/api/admin'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Admin() {
	const { data: session } = useSession()

	const { data: accountList, refetch } = useQuery({
		queryKey: ['account-admin'],
		queryFn: () => AdminService.getAccountList(session?.user.accessToken || ''),
	})

	useEffect(() => {
		if (session?.user !== undefined) {
			const userRoles = session.user.roles.split(',')
			if (!userRoles.includes('ROLE_ADMIN')) {
				redirect('/')
			}
		}
	}, [session, session?.user.roles])

	useEffect(() => {
		if (session?.user) {
			refetch()
		}
	}, [refetch, session])

	return (
		<div>
			<Stats totalUser={accountList?.length} />
			<div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-8 2xl:gap-8'>
				<ChartThree />
				<ChartTwo totalUser={accountList?.length} />
				{/* <ChartOne /> */}
			</div>
		</div>
	)
}
