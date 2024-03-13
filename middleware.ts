import createMiddleware from 'next-intl/middleware'
import {locales} from "@/src/shared/const/i18n";
import {localePrefix, pathnames } from '@/src/shared/config/i18n.config';

export default createMiddleware({
	locales,
	defaultLocale: 'en',
	pathnames,
	localePrefix
})

export const config = {
	matcher: [
		'/',
		'/(ky|en|ru|tr)/:path*',
		'/((?!api|_next/static|_next/image|favicon.ico|earth_hologram|assets).*)',
	],
}
