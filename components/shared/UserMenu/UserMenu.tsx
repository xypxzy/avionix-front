'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function UserMenu() {
	const session = useSession()

	console.log(session)

	if (session.status !== 'authenticated') {
		redirect('/sign-in')
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger aria-label='account info'>
				<User />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				{session.status === 'authenticated' ? (
					<DropdownMenuItem onClick={() => signOut()}>
						Sign Out
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem onClick={() => signIn('google')}>
						Sign In
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
