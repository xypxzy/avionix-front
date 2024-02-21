import { Locale } from '@/i18n'

export default function redirectToLocale(locale: Locale, pathname: string) {
	if (!pathname) {
		return '/'
	}

	// Split pathname as substrings in to an array, using "/" as a pattern.
	const pathParts = pathname.split('/')

	// Set the array index 1 as the locale, this position contains the locale.
	pathParts[1] = locale

	// Join the locale with "/" to get a valid URL path (/en, /fi etc...).
	const url = pathParts.join('/')

	// Return with locale.
	return url
}
