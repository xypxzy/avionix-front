import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export type Locale = 'en' | 'ru' | 'tr' | 'ky'

// Can be imported from a shared config
export const locales: Locale[] = ['en', 'ru', 'tr', 'ky']

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound()

	return {
		messages: (await import(`./translations/${locale}.json`)).default,
	}
})
