import { Locale } from '@/i18n'
import { DateTimeFormatOptions } from 'next-intl'

export const formatDate = (nowDate: Date, locale: Locale) => {
	const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

	const options: DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		timeZone: userTimeZone,
	}

	return nowDate.toLocaleString(locale, options)
}
