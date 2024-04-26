'use client'

import FlightService from '@/src/services/api/flight-host'
import { IFlightDataResponse } from '@/src/shared/types/topFlightsTypes'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import FlightsCard from './FlightsCard'

export function FlightsTicket() {
	const locale = useLocale()
	const searchParams = useSearchParams()
	const { data: flights } = useQuery<IFlightDataResponse>({
		queryKey: ['flights-list'],
		queryFn: () =>
			FlightService.getFlights({
				lan: locale,
				origin: searchParams.get('origin') ?? undefined,
				destination: searchParams.get('destination') ?? undefined,
				departureDate: searchParams.get('departureDate') ?? undefined,
				returnDate: searchParams.get('returnDate') ?? undefined,
				adults: searchParams.get('adults') ?? undefined,
				oneWay: searchParams.get('oneWay') ?? undefined,
			}),
	})
	return (
		<div className='mt-6 flex flex-col gap-5'>
			{flights &&
				flights.data.map((flight, index) => (
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
