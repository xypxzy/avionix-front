import { Separator } from '@/src/components/ui/separator'
import { ITicketBook } from '@/src/shared/types/schemas/ticketBook'
import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { useFlightStore } from '@/src/stores/ticket.store'
import Image from 'next/image'
import { UseFormReturn } from 'react-hook-form'

interface FlightsSummaryProps {
	flight: IFlight
	form: UseFormReturn<ITicketBook>
}

export function FlightsSummary({ flight, form }: FlightsSummaryProps) {
	const { flightResult } = useFlightStore()
	return (
		<div className='mt-5 flex w-full gap-10'>
			<div className='w-4/12 rounded-md border-2'>
				<div className='flex flex-1 gap-4 rounded-t-sm bg-primary p-4 px-8 text-base font-normal text-primary-foreground transition-all sm:items-center'>
					QR code
				</div>
				<div className='flex items-center justify-between p-4 px-8'>
					{flightResult?.['qr-code'] && (
						<Image
							src={flightResult?.['qr-code']}
							alt='qr'
							width={200}
							height={200}
							className='size-full'
						/>
					)}
				</div>
			</div>
			<div className='h-fit w-8/12 rounded-md border-2'>
				<div className='flex flex-1 gap-4 rounded-t-sm bg-primary p-4 px-8 text-base font-normal text-primary-foreground transition-all sm:items-center'>
					Summary
				</div>

				<div className='flex items-center justify-between p-4 px-8'>
					<span>1 x Пассажир</span>
					<span>
						{flight.currency} {flight.tariff.price}
					</span>
				</div>
				{form.getValues('checkedBaggageIncluded') && (
					<div className='flex items-center justify-between p-4 px-8'>
						<span>Зарегистрированный багаж</span>
						<span>{flight.currency} 100</span>
					</div>
				)}
				<Separator className='w-full px-8' />
				<div className='flex items-center justify-between p-4 px-8'>
					<span>Итого</span>
					<span>
						{flight.currency}{' '}
						{form.getValues('checkedBaggageIncluded')
							? flight.tariff.price + 100
							: flight.tariff.price}
					</span>
				</div>
			</div>
		</div>
	)
}
