'use client'

import { Button } from '@/src/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/src/components/ui/sheet'
import { cn } from '@/src/shared/utils/classnames'
import { navLinks } from '@/src/shared/utils/route'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../Logo/Logo'

const NavContent = () => {
	const pathname = usePathname()

	return (
		<section className='flex h-full flex-col gap-6 '>
			{navLinks.map(item => (
				<SheetClose asChild key={item.link}>
					<Link
						href={item.link}
						className={cn(
							pathname === item.link && 'border-b-2 border-primary'
						)}
					>
						<p className={`py-2`}>{item.title}</p>
					</Link>
				</SheetClose>
			))}
		</section>
	)
}

export default function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Menu
					width={36}
					height={36}
					className='cursor-pointer dark:invert-[0.9] md:hidden'
				/>
			</SheetTrigger>
			<SheetContent side={'left'} className='border-none'>
				<Logo />
				<div className='flex h-[calc(100%-72px)] flex-col justify-between '>
					<SheetClose asChild>
						<NavContent />
					</SheetClose>

					<div className='flex flex-col gap-3'>
						<SheetClose asChild>
							<Link href={'/sign-in'}>
								<Button className='min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
									<span>Log in</span>
								</Button>
							</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link href={'/sign-up'}>
								<Button className='min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
									Sign up
								</Button>
							</Link>
						</SheetClose>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
