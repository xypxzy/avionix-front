export const i18nConfig = {
	defaultLocale: 'en',
	locales: ['en', 'ru', 'tr', 'ky'],
} as const

export type Locale = (typeof i18nConfig)['locales'][number]
