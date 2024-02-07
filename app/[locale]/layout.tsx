import { Locale, i18nConfig } from '@/i18n'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Galada, Josefin_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import '../globals.css'

const josefinSans = Josefin_Sans({ subsets: ['latin'], weight: ['300', '400'] })
const galadaSans = Galada({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-galada',
})

export const metadata: Metadata = {
	title: 'Tripper',
	description: 'Generated by create next app',
}

export async function generateStaticParams() {
	return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }))
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: ReactNode
	params: {
		locale: Locale
	}
}>) {
	return (
		<html lang={params.locale}>
			<body className={cn(josefinSans.className, galadaSans.variable)}>
				{children}
			</body>
		</html>
	)
}
