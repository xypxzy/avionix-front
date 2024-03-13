import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from "@/src/shared/const/i18n";
import { Locale } from '@/src/shared/types/i18n';

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as Locale)) notFound()

	return {
		messages: (await import(`./translations/${locale}.json`)).default,
	}
})
