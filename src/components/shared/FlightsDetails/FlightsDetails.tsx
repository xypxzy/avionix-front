'use client'

import FlightService from '@/src/services/api/flight-host'
import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { format } from 'date-fns'
import { CalendarDays } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../ui/button'
import { Separator } from '../../ui/separator'
import { Skeleton } from '../../ui/skeleton'

export function FlightsDetails({ id }: { id: string }) {
	const locale = useLocale()
	const { data: flight, isLoading } = useQuery<IFlight>({
		queryKey: ['flight-details'],
		queryFn: () =>
			FlightService.getFlight(id, {
				lan: locale,
			}),
	})

	const { data: paymentLink } = useQuery<{
		paymentLinkId: string
		paymentLink: string
	}>({
		queryKey: ['flight-link'],
		queryFn: async () => {
			try {
				const response = await axios.get(
					`http://35.232.168.91:8072/avionix/flight/api/ticket/paymentLink?flightId=${flight?.id}&checkedBaggageIncluded=true`
				)
				return response.data
			} catch (error) {
				throw new Error(`Failed to fetch flight details: ${error}`)
			}
		},
	})

	if (isLoading || !flight) {
		return (
			<div className='mt-5 flex gap-10 '>
				<Skeleton className='h-96 w-3/5' />
				<Skeleton className='h-64 w-2/5' />
			</div>
		)
	}

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
			<div className='h-fit w-2/5'>
				<div className='rounded-md border-2'>
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
				<Link href={paymentLink?.paymentLink || '#'}>
					<Button variant='default' className='mt-5 w-full'>
						Купить
					</Button>
				</Link>
			</div>
		</div>
	)
}
