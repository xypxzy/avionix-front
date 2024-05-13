import flightService from '@/src/services/api/flight-host'
import { create } from 'zustand'
import { IFlightQueryParams, ISearchFlight } from '../shared/types/flights'

type SearchStore = {
	searchResult: ISearchFlight | null
	setSearchResult: (searchResult: ISearchFlight) => void
	fetchSearchResult: (queryParams: IFlightQueryParams) => Promise<void>
}

export const useSearchStore = create<SearchStore>(set => ({
	searchResult: null,
	setSearchResult: searchResult => set({ searchResult }),
	fetchSearchResult: async (queryParams: IFlightQueryParams) => {
		const searchResult = await flightService
			.getFlightsSearch(queryParams as IFlightQueryParams)
			.then(res => res.data)

		set({ searchResult })
	},
}))
