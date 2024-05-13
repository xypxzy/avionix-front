'use client'
import { useQuery } from '@tanstack/react-query'

import { useLocale } from 'next-intl'
import Link from 'next/link'

import { Button } from '@/src/components/ui/button'
import { Skeleton } from '@/src/components/ui/skeleton'
import FlightService from '@/src/services/api/flight-host'
import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { MoveRight } from 'lucide-react'
import { Suspense, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs'
import { FlightsInformation } from './FlightsDetailsTabContent/FlightsInformation'

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
		queryFn: () => FlightService.getFlightLink(id, true),
	})

	const [step, setStep] = useState(1)

	if (isLoading || !flight) {
		return (
			<div className='mt-5 flex gap-10 '>
				<Skeleton className='h-[500px] w-3/5' />
				<Skeleton className='h-64 w-2/5' />
			</div>
		)
	}

	return (
		<Tabs defaultValue='details' className='w-full'>
			<div className='mt-6 flex items-center justify-between'>
				<TabsList className='h-12 sm:h-14'>
					<TabsTrigger value='details' className='text-xs sm:text-sm'>
						Ticket Details
					</TabsTrigger>
					<TabsTrigger
						value='baggage'
						className='text-xs sm:text-sm'
						onClick={() => setStep(2)}
						disabled={step > 0}
					>
						Baggage
					</TabsTrigger>
					<TabsTrigger value='seating' className='text-xs sm:text-sm' disabled>
						Seating
					</TabsTrigger>
					<TabsTrigger value='summary' className='text-xs sm:text-sm' disabled>
						Summary & Payment
					</TabsTrigger>
				</TabsList>
				<Link href={(step === 4 && paymentLink?.paymentLink) || '#'}>
					<Button
						variant='default'
						className='mt-5 flex w-fit gap-5 text-xs sm:text-sm'
						onClick={() => setStep(prev => prev + 1)}
						disabled={!paymentLink?.paymentLink}
					>
						Продолжить
						<MoveRight />
					</Button>
				</Link>
			</div>
			<TabsContent value='details'>
				<Suspense fallback={<div>Is Loading...</div>}>
					<FlightsInformation flight={flight} />
				</Suspense>
			</TabsContent>
			<TabsContent value='baggage'>Change your password here.</TabsContent>
			<TabsContent value='seating'>Change your password here.</TabsContent>
			<TabsContent value='summary'>Change your password here.</TabsContent>
		</Tabs>
	)
}
