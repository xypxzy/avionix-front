'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { i18nConfig } from '@/i18n'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
	const { locales } = i18nConfig

	const pathname = usePathname()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className='h-8 w-14 space-x-2 border-none p-0 text-sm'
				aria-label='change language'
			>
				{pathname.split('/')[1].toUpperCase()}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{locales.map((locale, index) => (
					<Link href={`${locale}`} key={index}>
						<DropdownMenuItem>{locale.toUpperCase()}</DropdownMenuItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
