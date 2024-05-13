'use client'
import { useQuery } from '@tanstack/react-query'

import Link from 'next/link'

import { Button } from '@/src/components/ui/button'
import { Skeleton } from '@/src/components/ui/skeleton'
import FlightService from '@/src/services/api/flight-host'
import {
	ITicketBook,
	TicketStep,
	ticketBookSchema,
} from '@/src/shared/types/schemas/ticketBook'
import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoveRight } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs'
import { RenderFormContent } from './RenderFormContent/RenderFormContent'

export function FlightsDetails({ id }: { id: string }) {
	const locale = useLocale()
	const { data: flight, isLoading } = useQuery<IFlight>({
		queryKey: ['flight-details'],
		queryFn: () =>
			FlightService.getFlight(id, {
				lan: locale,
			}),
	})
	const { data: payment } = useQuery<{
		paymentLinkId: string
		paymentLink: string
	}>({
		queryKey: ['flight-link'],
		queryFn: () => FlightService.getFlightLink(id, true),
	})
	const [currentStep, setCurrentStep] = useState(0)
	const [currentTab, setCurrentTab] = useState('details')
	const { data } = useSession()

	const form = useForm<ITicketBook>({
		resolver: zodResolver(ticketBookSchema),
		defaultValues: {
			flightId: id,
			paymentLinkId: payment?.paymentLinkId,
			checkedBaggageIncluded: false,
			seat: '1C',
		},
	})

	const next = () => {
		if (currentStep < TicketStep.length - 1) {
			setCurrentStep(step => step + 1)
			if (currentStep === 0) {
				setCurrentTab('seating')
			}
			if (currentStep === 1) {
				setCurrentTab('baggage')
			}
			if (currentStep === 2) {
				setCurrentTab('summary')
			}
		}
	}

	// TODO: add post request to ticket
	const onSubmit = (formData: ITicketBook) => {
		console.log(formData)
	}

	useEffect(() => {
		if (payment?.paymentLinkId) {
			form.setValue('paymentLinkId', payment?.paymentLinkId)
		}
	}, [payment?.paymentLinkId, form])

	if (isLoading || !flight) {
		return (
			<div className='mt-5 flex gap-10 '>
				<Skeleton className='h-[500px] w-3/5' />
				<Skeleton className='h-64 w-2/5' />
			</div>
		)
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Tabs defaultValue={'details'} value={currentTab} className='w-full'>
				<div className='mt-6 flex items-center justify-between'>
					<TabsList className='h-12 sm:h-14'>
						<TabsTrigger
							value='details'
							onClick={() => {
								setCurrentStep(0)
								setCurrentTab('details')
							}}
							className='text-xs sm:text-sm'
						>
							Ticket Details
						</TabsTrigger>
						<TabsTrigger
							value='seating'
							onClick={() => {
								setCurrentStep(1)
								setCurrentTab('seating')
							}}
							className='text-xs sm:text-sm'
							disabled={currentStep < 1}
						>
							Seating
						</TabsTrigger>
						<TabsTrigger
							value='baggage'
							onClick={() => {
								setCurrentStep(2)
								setCurrentTab('baggage')
							}}
							className='text-xs sm:text-sm'
							disabled={currentStep < 2}
						>
							Baggage
						</TabsTrigger>
						<TabsTrigger
							value='summary'
							onClick={() => {
								setCurrentStep(3)
								setCurrentTab('summary')
							}}
							className='text-xs sm:text-sm'
							disabled={currentStep < 3}
						>
							Summary & Payment
						</TabsTrigger>
					</TabsList>
					{currentStep === TicketStep.length - 1 ? (
						<Link href={payment?.paymentLink || '#'}>
							<Button
								variant='default'
								className='mt-5 flex w-fit gap-5 text-xs sm:text-sm'
								disabled={!payment?.paymentLink}
							>
								Submit
							</Button>
						</Link>
					) : (
						<Button
							variant='default'
							className='mt-5 flex w-fit gap-5 text-xs sm:text-sm'
							onClick={next}
							type={currentStep === TicketStep.length - 2 ? 'submit' : 'button'}
						>
							Next
							<MoveRight />
						</Button>
					)}
				</div>
				{currentStep === 0 && RenderFormContent(0, flight, form)}
				{currentStep === 1 && RenderFormContent(1, flight, form)}
				{currentStep === 2 && RenderFormContent(2, flight, form)}
				{currentStep === 3 && RenderFormContent(3, flight, form)}
			</Tabs>
		</form>
	)
}
