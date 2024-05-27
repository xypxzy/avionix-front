'use client'

import { useSearchStore } from '@/src/stores/search.store'
import {useEffect} from "react";

export default function SearchPage() {
	const { searchResult } = useSearchStore()

	useEffect(() => {
		console.log(searchResult)
	}, []);

	return (
		searchResult?.flights && (
			<div>
			 search
			</div>
		)
	)
}
