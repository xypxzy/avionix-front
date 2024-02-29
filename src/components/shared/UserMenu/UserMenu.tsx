'use client'

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@/src/components/ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'

import { Button } from '@/src/components/ui/button'
import { Card, CardContent } from '@/src/components/ui/card'
import { LinkEnum } from '@/src/utils/route'
import { User } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function UserMenu() {
	const session = useSession()

	if (session.status === 'unauthenticated') {
		return (
			<Dialog>
				<DialogTrigger>Login</DialogTrigger>
				<DialogContent className='p-16'>
					<DialogHeader className='items-center text-lg'>
						Who are you?
					</DialogHeader>
					<div className='flex gap-10'>
						<Card className='w-1/2 pt-6 text-center'>
							<CardContent>
								<Button variant='link' className='text-foreground'>
									<Link href={LinkEnum.Login}>Login</Link>
								</Button>
							</CardContent>
						</Card>
						<Card className='w-1/2 pt-6 text-center'>
							<CardContent>
								<Button variant='link' className='text-foreground'>
									<Link href={LinkEnum.SignUp}>Sign Up</Link>
								</Button>
							</CardContent>
						</Card>
					</div>
				</DialogContent>
			</Dialog>
		)
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
					<DropdownMenuItem>
						<Link href={'/login'}>Sign In</Link>
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
