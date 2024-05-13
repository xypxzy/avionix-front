import { Separator } from '@/src/components/ui/separator'
import FlightService from '@/src/services/api/flight-host'
import { ISeatDetails } from '@/src/shared/types/flights'
import { ITicketBook } from '@/src/shared/types/schemas/ticketBook'
import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { cn } from '@/src/shared/utils/classnames'
import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

interface FlightsSeatingProps {
	flight: IFlight
	form: UseFormReturn<ITicketBook>
}

export function FlightsSeating({ flight, form }: FlightsSeatingProps) {
	const { data: airplaneData } = useQuery<ISeatDetails>({
		queryKey: ['seat-details'],
		queryFn: () => FlightService.getSeatDetails(flight.id),
	})
	const [currentSeat, setCurrentSeat] = useState(form.watch('seat') || '')

	useEffect(() => {
		form.setValue('seat', currentSeat)
	}, [currentSeat, form])

	return (
		<div className='mt-5 flex w-full justify-between gap-10'>
			{airplaneData && (
				<AirplaneSchema
					airplaneData={airplaneData}
					currentSeat={currentSeat}
					setCurrentSeat={setCurrentSeat}
				/>
			)}
			<div className='h-fit w-2/5 rounded-md border-2'>
				<div className='flex flex-1 gap-4 rounded-t-sm bg-primary p-4 px-8 text-base font-normal text-primary-foreground transition-all sm:items-center'>
					Price Details
				</div>
				<div className='flex items-center justify-between p-4 px-8'>
					<span>1 x Passenger</span>
					<span>
						{flight.currency} {flight.tariff.price}
					</span>
				</div>
			</div>
		</div>
	)
}

interface AirplaneSchemaProps {
	airplaneData: ISeatDetails
	currentSeat: string
	setCurrentSeat: Dispatch<SetStateAction<string>>
}

const AirplaneSchema = ({
	airplaneData,
	currentSeat,
	setCurrentSeat,
}: AirplaneSchemaProps) => {
	const { seatRow, seatColumn } = airplaneData.airplane
	const columns = Array.from({ length: seatColumn }, (_, index) =>
		String.fromCharCode(65 + index)
	)

	const checkIsReserved = (seat: string) => {
		return airplaneData.reservedSeats.includes(seat)
	}

	return (
		<div className='h-fit w-2/5 rounded-md border-2'>
			<div className='flex flex-1 gap-4 rounded-t-sm bg-primary p-4 px-8 text-base font-normal text-primary-foreground transition-all sm:items-center'>
				Price Details
			</div>
			<div className='mr-8 flex flex-col items-center p-4 px-8'>
				<div className='flex gap-2'>
					{['', ...columns].map(column => (
						<div key={column} className='size-8 text-center'>
							{column}
						</div>
					))}
				</div>
				{Array.from({ length: seatRow }, (_, rowIndex) => (
					<div key={rowIndex} className='mb-2 flex gap-2'>
						<div className='size-8 text-center'>{rowIndex + 1}</div>
						{columns.map(column => (
							<button
								key={`${rowIndex}${column}`}
								onClick={() => setCurrentSeat(`${rowIndex + 1}${column}`)}
								className={cn(
									'size-8 cursor-pointer rounded-sm bg-green-500',
									currentSeat === `${rowIndex + 1}${column}`
										? 'bg-purple-500'
										: '',
									checkIsReserved(`${rowIndex}${column}`) ? 'bg-blue-950' : ''
								)}
								disabled={checkIsReserved(`${rowIndex}${column}`)}
								type='button'
							/>
						))}
					</div>
				))}
			</div>
			<Separator className='w-full' />
			<div className='flex items-center justify-center gap-8 py-4'>
				<div className='flex items-center gap-4'>
					<div className='size-8 rounded-sm bg-green-500' />
					Available
				</div>
				<div className='flex items-center gap-4'>
					<div className='size-8 rounded-sm bg-blue-950' />
					Reserved
				</div>
				<div className='flex items-center gap-4'>
					<div className='size-8 rounded-sm bg-purple-500' />
					Your Seat
				</div>
			</div>
		</div>
	)
}

export default AirplaneSchema
