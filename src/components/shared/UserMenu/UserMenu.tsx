'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'
import { LinkEnum } from '@/src/shared/utils/route'
import {LogIn, User} from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import {useTranslations} from "next-intl";

export default function UserMenu() {
	const t = useTranslations('authBtn')
	const session = useSession()

	if (session.status === 'unauthenticated') {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger aria-label='account info'>
					<LogIn />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<Link href={LinkEnum.Login}>
							{t('login')}
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href={LinkEnum.SignUp}>
							{t('signup')}
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger aria-label='account info'>
				<User />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{t('myaccount')}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href={'/profile'}>
						{t('profile')}
					</Link>
				</DropdownMenuItem>
				{session.status === 'authenticated' ? (
					<DropdownMenuItem onClick={() => signOut()}>
						{t('signout')}
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem>
						<Link href={'/login'}>{t('login')}</Link>
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
