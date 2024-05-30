'use client'

import { Row } from '@tanstack/react-table'

import { Button } from '@/src/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/src/components/ui/dialog'
import AdminService from '@/src/services/api/admin'
import { Check, Trash2 } from 'lucide-react'
import { useSession } from 'next-auth/react'

interface DataTableRowActionsProps<TData> {
	row: Row<TData>
	id?: string
	isEnabled?: boolean
}

export function DataTableRowActions<TData>({
	row,
	id,
	isEnabled = false,
}: DataTableRowActionsProps<TData>) {
	const { data: session } = useSession()

	const handleBlockUser = async () => {
		if (id && session?.user.accessToken) {
			await AdminService.postBlockAccount(id, session?.user.accessToken)
		}
	}

	const handleUnblockUser = async () => {
		if (id && session?.user.accessToken) {
			await AdminService.postUnblockAccount(id, session?.user.accessToken)
		}
	}
	return (
		<div className='flex items-center justify-between gap-2'>
			{!isEnabled ? (
				<Dialog>
					<DialogTrigger className=' px-4 py-2'>
						<Check className='size-5' />
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Are you unblocked account?</DialogTitle>
						</DialogHeader>
						<DialogFooter className='mt-10'>
							<Button
								variant='outline'
								className='w-full text-black'
								onClick={handleUnblockUser}
							>
								Unblock Account
							</Button>
							<DialogClose asChild>
								<Button variant='outline' className='text-black '>
									Cancel
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			) : (
				<Dialog>
					<DialogTrigger className=' px-4 py-2'>
						<Trash2 className='size-5' />
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Are you blocked account?</DialogTitle>
						</DialogHeader>
						<DialogFooter className='mt-10'>
							<Button
								variant='outline'
								className='w-full text-black'
								onClick={handleBlockUser}
							>
								Block Account
							</Button>
							<DialogClose asChild>
								<Button variant='outline' className='text-black '>
									Cancel
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
		</div>
	)
}
