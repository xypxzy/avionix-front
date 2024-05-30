'use client'

import { DataTable } from '@/src/components/shared/Admin/DataTable/DataTable'
import { accountColumns } from '@/src/components/shared/Admin/DataTable/columns'
import AdminService from '@/src/services/api/admin'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function AdminUsers() {
	const { data: session } = useSession()

	const { data: accountList, refetch } = useQuery({
		queryKey: ['account-admin'],
		queryFn: () => AdminService.getAccountList(session?.user.accessToken || ''),
	})

	useEffect(() => {
		if (session?.user) {
			refetch()
		}
	}, [refetch, session])

	return accountList && accountList?.length > 0 ? (
		<DataTable data={accountList} columns={accountColumns} />
	) : (
		<div>Is Empty</div>
	)
}
