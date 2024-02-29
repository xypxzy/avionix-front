'use client'

import { LinkEnum } from '@/src/utils/route'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface LogoProps {
	isFooter?: boolean
}

export default function Logo({ isFooter }: LogoProps) {
	const { resolvedTheme } = useTheme()
	const [hasMounted, setHasMounted] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	let src =
		'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

	useEffect(() => {
		setHasMounted(true)
		setIsMobile(window.innerWidth <= 768)
	}, [])

	if (hasMounted) {
		switch (resolvedTheme) {
			case 'light':
				src = isMobile
					? isFooter
						? '/assets/images/logo-mobile-dark.svg'
						: '/assets/images/logo-mobile.svg'
					: isFooter
						? '/assets/images/logo-desktop-dark.svg'
						: '/assets/images/logo-desktop.svg'
				break
			case 'dark':
				src = isMobile
					? isFooter
						? '/assets/images/logo-mobile-dark.svg'
						: '/assets/images/logo-mobile-dark.svg'
					: isFooter
						? '/assets/images/logo-desktop-dark.svg'
						: '/assets/images/logo-desktop-dark.svg'
				break
			default:
				break
		}
	}

	return (
		<Link href={LinkEnum.Home}>
			<Image
				src={src}
				alt='Logo'
				width={isMobile ? 60 : 200}
				height={40}
				loading='lazy'
				className='mx-auto h-[40px]'
			/>
		</Link>
	)
}