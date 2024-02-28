import { Locale, locales } from '@/i18n'
import { ThemeProvider } from '@/providers'
import { LanguagesProvider } from '@/providers/LanguagesProvider/LanguagesProvider'
import { cn } from '@/utils/classnames'
import type { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import { IBM_Plex_Mono } from 'next/font/google'
import { ReactNode } from 'react'
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
export function generateStaticParams() {
	return locales.map(locale => ({ locale }))
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: ReactNode
	params: {
		locale: Locale
	}
}>) {
	unstable_setRequestLocale(params.locale)

	return (
		<html lang={params.locale} suppressHydrationWarning>
			<body className={cn(ibmPlexMono.className)}>
				<LanguagesProvider locale={params.locale}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						{/* <AuthProvider> */}
						{children}
						{/* </AuthProvider> */}
					</ThemeProvider>
				</LanguagesProvider>
			</body>
		</html>
	)
}
