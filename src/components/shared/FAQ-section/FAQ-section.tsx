'use client'

import { FaqAccordion } from '@/src/components/shared/FAQ-section/FaqAccordion/FaqAccrodion'
import { FaqForm } from '@/src/components/shared/FAQ-section/FaqForm/FaqForm'
import DiscoveryService from '@/src/services/api/discovery'
import { IFaq } from '@/src/shared/types/discovery'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

const FAQSection = () => {
	const locale = useLocale()
	const { data: faqList, isLoading } = useQuery<IFaq[]>({
		queryKey: ['faq-list'],
		queryFn: () => DiscoveryService.getFaqList(locale),
	})
	return (
		<section
			className={`flex flex-col items-start justify-center gap-10 py-10 lg:flex-row lg:justify-between`}
		>
			<FaqAccordion faqList={faqList} isLoading={isLoading} />
			<FaqForm />
		</section>
	)
}
export default FAQSection
