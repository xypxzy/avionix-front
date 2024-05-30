'use client'

import { DataTable } from '@/src/components/shared/Admin/DataTable/DataTable'
import {
	commentColumns,
	contactColumns,
} from '@/src/components/shared/Admin/DataTable/columns'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/src/components/ui/tabs'
import AdminService from '@/src/services/api/admin'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function AdminInbox() {
	const { data: session } = useSession()
	const { data: commentList, refetch } = useQuery({
		queryKey: ['comment-admin'],
		queryFn: () => AdminService.getCommentList(session?.user.accessToken || ''),
	})

	const { data: contactList } = useQuery({
		queryKey: ['contact-admin'],
		queryFn: () => AdminService.getContactList(session?.user.accessToken || ''),
	})

	useEffect(() => {
		if (session?.user) {
			refetch()
		}
	}, [refetch, session])

	return (
		<div>
			<Tabs defaultValue='feedback' className='w-full'>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='feedback'>Feedback</TabsTrigger>
					<TabsTrigger value='contact'>Contact</TabsTrigger>
				</TabsList>
				<TabsContent value='contact'>
					{contactList ? (
						<DataTable data={contactList} columns={contactColumns} />
					) : (
						''
					)}
				</TabsContent>
				<TabsContent value='feedback'>
					{commentList ? (
						<DataTable data={commentList} columns={commentColumns} />
					) : (
						''
					)}
				</TabsContent>
			</Tabs>
		</div>
	)
}
