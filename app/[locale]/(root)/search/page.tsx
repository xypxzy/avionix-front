'use client'
import { useSearchStore } from '@/src/stores/search.store'
import FlightsCard from "@/src/components/shared/FlightsTicket/FlightsCard";

export default function SearchPage() {
	const { searchResult } = useSearchStore()

	return (
		<div className='mt-6 flex flex-col gap-5'>
			{searchResult?.flights &&
				searchResult.flights.map((flight, index:number) => (
					<div
						key={index}
						className='rounded-md border border-primary bg-white p-5'
					>
						<FlightsCard flight={flight} />
					</div>
				))}
		</div>
	)
}
