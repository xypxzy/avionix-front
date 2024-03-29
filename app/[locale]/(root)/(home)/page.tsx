import Hero from '@/src/components/common/Hero/Hero'
import TopFlights from '@/src/components/shared/TopFlights/TopFlights'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import FAQSection from "@/src/components/shared/FAQ-section/FAQ-section";
import {SpecialDeals} from "@/src/components/shared/SpecialDeals/SpecialDeals";
import AirlinesRating from "@/src/components/shared/AirlinesRating/AirlinesRating";
import { Locale } from '@/src/shared/types/i18n';
import WhyUs from "@/src/components/shared/WhyUs/WhyUs";

export default function Home({ params }: { params: { locale: Locale } }) {
	unstable_setRequestLocale(params.locale)
	const t = useTranslations('hero')

	return (
		<>
			<Hero title={t('home-title')} preTitle={t('home-desc')} />
			<TopFlights />
			<AirlinesRating/>
			<SpecialDeals/>
			<WhyUs/>
			<FAQSection/>
		</>
	)
}
