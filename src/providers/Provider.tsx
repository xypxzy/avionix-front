import React from 'react'
import { Locale } from '../shared/types/i18n'
import { AuthProvider } from './AuthProvider/AuthProvider'
import { LanguagesProvider } from './LanguagesProvider/LanguagesProvider'
import { QueryProvider } from './QueryProvider/QueryProvider'
import { ThemeProvider } from './ThemeProvider/ThemeProvider'

interface ProviderProps {
	locale: Locale
	children: React.ReactNode
}

export function Provider({ locale, children }: ProviderProps) {
	return (
		<LanguagesProvider locale={locale}>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				<QueryProvider>
					<AuthProvider>{children}</AuthProvider>
				</QueryProvider>
			</ThemeProvider>
		</LanguagesProvider>
	)
}
