'use client'

import { FaqAccordion } from '@/src/components/shared/FAQ-section/FaqAccordion/FaqAccrodion'
import { useSearchStore } from '@/src/stores/search.store'

export default function SearchPage() {
	const { searchResult } = useSearchStore()

	console.log(searchResult)

	return (
		searchResult?.faqs && (
			<div>
				{searchResult?.faqs.length > 0 && (
					<FaqAccordion faqList={searchResult?.faqs} />
				)}
			</div>
		)
	)
}
