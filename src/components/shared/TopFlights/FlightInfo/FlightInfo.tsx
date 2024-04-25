import { FlightData } from '@/src/shared/types/topFlightsTypes'
import { useLocale } from 'next-intl'
import React from 'react'
import { FlightDetails } from './FlightDetails'
import { FlightSegment } from './FlightSegment'

export const FlightInfo: React.FC<{ item: FlightData }> = ({ item }) => {
	const locale = useLocale()

	const convertDate = (takeoffAt: string, arrivalAt: string) => {
		const arrivalTime = new Date(arrivalAt).getTime()
		const takeoffTime = new Date(takeoffAt).getTime()
		const difference = Math.abs(arrivalTime - takeoffTime)

		const hours = Math.floor(difference / (1000 * 60 * 60))
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

		return `${hours}h ${minutes}m`
	}

	return (
		<div>
			<div className='flex flex-col gap-5'>
				{item.flight.departureTrip.segments.map((segment, index) => (
					<div
						key={index}
						className={
							'flex w-full flex-col justify-between gap-10 md:flex-row'
						}
					>
						<FlightSegment
							flight={item.flight.from}
							segment={segment.takeoffAt}
							locale={locale}
						/>
						<FlightDetails
							segment={segment}
							duration={convertDate(segment.takeoffAt, segment.arrivalAt)}
							airline={item.flight.airline}
						/>
						<FlightSegment
							flight={item.flight.to}
							segment={segment.arrivalAt}
							locale={locale}
						/>
					</div>
				))}
			</div>
			{!item.flight.oneWay && (
				<>
					<div className={`my-4 h-[1px] w-full bg-dark_blue`}></div>
					<div className='flex flex-col gap-5'>
						{item.flight.returnTrip.segments.map((segment, index) => (
							<div
								key={index}
								className={
									'flex w-full flex-col justify-between gap-10 md:flex-row'
								}
							>
								<FlightSegment
									flight={item.flight.from}
									segment={segment.takeoffAt}
									locale={locale}
								/>
								<FlightDetails
									segment={segment}
									duration={convertDate(segment.takeoffAt, segment.arrivalAt)}
									airline={item.flight.airline}
								/>
								<FlightSegment
									flight={item.flight.to}
									segment={segment.arrivalAt}
									locale={locale}
								/>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}
