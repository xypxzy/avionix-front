import Hero from '@/components/common/Hero/Hero'
import TopFlights from '@/components/shared/TopFlights/TopFlights'
import { Locale } from '@/i18n'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Home({ params }: { params: { locale: Locale } }) {
	// For to enable ssg
	unstable_setRequestLocale(params.locale)
	const t = useTranslations('hero')

	return (
		<>
			<Hero title={t('home-title')} preTitle={t('home-desc')} />
			<TopFlights />
		</>
	)
}
