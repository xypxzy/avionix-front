import type { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import { IBM_Plex_Mono } from 'next/font/google'
import React from 'react'

import { Toaster } from '@/src/components/ui/toaster'
import { Provider } from '@/src/providers/Provider'
import { Locale } from '@/src/shared/types/i18n'
import { cn } from '@/src/shared/utils/classnames'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['300', '400'],
})

export const metadata: Metadata = {
	title: 'Avionix',
	description:
		'Avionix - your reliable partner in the world of air travel. We specialize in providing a wide range of services for booking and selling airline tickets to make your journey as comfortable and hassle-free as possible.',
	icons: {
		icon: [
			{
				type: 'image/png',
				media: '(prefers-color-scheme: light)',
				url: '/assets/icons/favicon-dark.png',
			},
			{
				type: 'image/png',
				media: '(prefers-color-scheme: dark)',
				url: '/assets/icons/favicon.png',
			},
		],
	},
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: {
		locale: Locale
	}
}>) {
	unstable_setRequestLocale(params.locale)

	return (
		<html lang={params.locale} suppressHydrationWarning>
			<body className={cn(ibmPlexMono.className, 'relative')}>
				<Provider locale={params.locale}>
					{children}
					<Toaster />
				</Provider>
			</body>
		</html>
	)
}
