import { Separator } from '@/src/components/ui/separator'
import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { format } from 'date-fns'
import { CalendarDays } from 'lucide-react'
import Image from 'next/image'

interface FlightsInformationProps {
	flight: IFlight
}

export function FlightsInformation({ flight }: FlightsInformationProps) {
	return (
		<div className='mt-5 flex w-full gap-10'>
			<div className='w-3/5 rounded-md border-2'>
				<div className='flex flex-1 gap-4 rounded-t-sm bg-primary p-4 px-8 text-base font-normal text-primary-foreground transition-all  sm:items-center'>
					Ticket
				</div>
				<div>
					<div className='space-y-2 p-4 px-8'>
						<p>В {flight?.to}</p>
						<p className='flex items-center gap-3'>
							<CalendarDays className='size-5' />
							{format(
								new Date(flight?.departureTrip.segments[0].takeoffAt || ''),
								'MMMM dd yyyy'
							)}
						</p>
						<div className='ml-6 flex flex-col gap-4'>
							<span className='w-fit rounded-md border p-2 text-xs font-semibold'>
								{flight?.tariff.cabin}
							</span>
							<span className='flex items-center gap-2'>
								<span>
									{format(
										new Date(flight?.departureTrip.segments[0].takeoffAt || ''),
										'hh:mm'
									)}
								</span>
								<span className='flex flex-col'>
									<span>{flight?.from}</span>
									<span>
										Airport {flight?.departureTrip.segments[0].takeoffIata}
									</span>
								</span>
							</span>
							<span className='flex items-end gap-5'>
								<Image
									src={flight?.airlineImageUrl!}
									alt={'airline logo'}
									width={80}
									height={80}
								/>
								<p>{flight?.airline}</p>
							</span>
							<span className='flex items-center gap-2'>
								<span>
									{format(
										new Date(flight?.returnTrip.segments[0].takeoffAt || ''),
										'hh:mm'
									)}
								</span>
								<span className='flex flex-col'>
									<span>{flight?.to}</span>
									<span>
										Airport {flight?.returnTrip.segments[0].takeoffIata}
									</span>
								</span>
							</span>
						</div>
					</div>
					<Separator />
					<div className='space-y-2 p-4 px-8'>
						<p>В {flight?.from}</p>
						<p className='flex items-center gap-3'>
							<CalendarDays className='size-5' />
							{format(
								new Date(flight?.departureTrip.segments[0].arrivalAt || ''),
								'MMMM dd yyyy'
							)}
						</p>
						<div className='ml-6 flex flex-col gap-4'>
							<span className='w-fit rounded-md border p-2 text-xs font-semibold'>
								{flight?.tariff.cabin}
							</span>
							<span className='flex items-center gap-2'>
								<span>
									{format(
										new Date(flight?.departureTrip.segments[0].arrivalAt || ''),
										'hh:mm'
									)}
								</span>
								<span className='flex flex-col'>
									<span>{flight?.from}</span>
									<span>
										Airport {flight?.departureTrip.segments[0].arrivalIata}
									</span>
								</span>
							</span>
							<span className='flex items-end gap-5'>
								<Image
									src={flight?.airlineImageUrl!}
									alt={'airline logo'}
									width={80}
									height={80}
								/>
								<p>{flight?.airline}</p>
							</span>
							<span className='flex items-center gap-2'>
								<span>
									{format(
										new Date(flight?.returnTrip.segments[0].arrivalAt || ''),
										'hh:mm'
									)}
								</span>
								<span className='flex flex-col'>
									<span>{flight?.to}</span>
									<span>
										Airport {flight?.returnTrip.segments[0].arrivalIata}
									</span>
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
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
