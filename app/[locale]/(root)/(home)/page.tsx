import { Locale } from '@/i18n'
import Hero from '@/src/components/common/Hero/Hero'
import TopFlights from '@/src/components/shared/TopFlights/TopFlights'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import FrequentlyAskedQuestions from "@/src/components/shared/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import AirlinesRating from "@/src/components/shared/AirlinesRating/AirlinesRating";

export default function Home({ params }: { params: { locale: Locale } }) {
	unstable_setRequestLocale(params.locale)
	const t = useTranslations('hero')

	return (
		<>
			<Hero title={t('home-title')} preTitle={t('home-desc')} />
			<TopFlights />
			<AirlinesRating/>
			<FrequentlyAskedQuestions/>
		</>
	)
}
