import { Locale } from '@/i18n'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import React from 'react'

interface Props {
	children: React.ReactNode
	locale: Locale
}

export function LanguagesProvider({ children, locale }: Props) {
	const messages = useMessages()

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			{children}
		</NextIntlClientProvider>
	)
}
