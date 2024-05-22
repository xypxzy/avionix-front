'use client'

import { FaqAccordion } from '@/src/components/shared/FAQ-section/FaqAccordion/FaqAccrodion'
import { useSearchStore } from '@/src/stores/search.store'
import {useEffect} from "react";

export default function SearchPage() {
	const { searchResult } = useSearchStore()

	useEffect(() => {
		console.log('search res: ', searchResult)
	}, []);

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
