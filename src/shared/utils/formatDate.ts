import { DateTimeFormatOptions } from 'next-intl'
import { Locale } from '@/src/shared/types/i18n'

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
