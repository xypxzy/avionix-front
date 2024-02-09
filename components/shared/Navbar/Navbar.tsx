'use client'

import { cn } from '@/lib/utils'
import { navLinks } from '@/routes/route'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const pathname = usePathname()

	return (
		<nav className='hidden md:block'>
			<ul className='flex gap-16 text-sm'>
				{navLinks.map(navLink => (
					<li
						key={navLink.title}
						className={cn(
							"text-foreground inline-block after:block after:content-[''] after:scale-x-0 after:w-full after:border-b-2 after:border-primary dark:after:border-border  after:transition-transform after:duration-200 after:ease-in-out hover:after:scale-x-100 after:origin-left",
							pathname === navLink.link &&
								"after:block after:content-[''] after:w-1/2 after:border-b-2 after:border-primary after:scale-x-100"
						)}
					>
						<Link href={navLink.link}>{navLink.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
