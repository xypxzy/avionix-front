import Hero from '@/src/components/common/Hero/Hero'
import AirlinesRating from '@/src/components/shared/AirlinesRating/AirlinesRating'
import FAQSection from '@/src/components/shared/FAQ-section/FAQ-section'
import { SpecialDeals } from '@/src/components/shared/SpecialDeals/SpecialDeals'
import TopFlights from '@/src/components/shared/TopFlights/TopFlights'
import WhyUs from '@/src/components/shared/WhyUs/WhyUs'
import { Locale } from '@/src/shared/types/i18n'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import {Comments} from "@/src/components/shared/Comments/Comments";

export default function Home({ params }: { params: { locale: Locale } }) {
	unstable_setRequestLocale(params.locale)
	const t = useTranslations('hero')

	return (
		<>
			<Hero title={t('home-title')} preTitle={t('home-desc')} />
			<TopFlights />
			<AirlinesRating />
			<SpecialDeals />
			<WhyUs />
			<Comments/>
			<FAQSection />
		</>
	)
}
