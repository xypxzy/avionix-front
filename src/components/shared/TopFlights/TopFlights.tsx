'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/src/components/ui/accordion'
import { Button } from '@/src/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/src/components/ui/card'
import FlightService from '@/src/services/api/flight-host'
import { FlightData } from '@/src/shared/types/topFlightsTypes'
import { LinkEnum } from '@/src/shared/utils/route'
import { useQuery } from '@tanstack/react-query'
import { FlightInfo } from './FlightInfo/FlightInfo'
import { TopFlightsSkeleton } from './TopFlights.skeleton'

export default function TopFlights() {
	const locale = useLocale()
	const { data: topFlights, isLoading } = useQuery<FlightData[]>({
		queryKey: ['top-flights'],
		queryFn: () => FlightService.getTopFlights(locale),
	})
	const [currentFlight, setCurrentFlight] = useState<FlightData | undefined>(
		undefined
	)
	const t = useTranslations('top-flights')

	useEffect(() => {
		if (topFlights && topFlights.length > 0) setCurrentFlight(topFlights[0])
	}, [topFlights])

	if (isLoading) {
		return <TopFlightsSkeleton />
	}

	return (
		<section className='relative'>
			<div className='my-8 flex w-full flex-col items-center justify-between sm:flex-row'>
				<h3 className='text-base md:text-lg lg:text-xl'>{t('title')}</h3>
				<Link href={LinkEnum.Flights}>
					<Button
						variant='link'
						className='text-foreground underline hover:text-muted-foreground'
					>
						{t('link')}
					</Button>
				</Link>
			</div>
			<div className='flex flex-col gap-8 lg:flex-row'>
				{currentFlight && (
					<Card className='flex w-full max-w-[420px] flex-col justify-between rounded-sm border-2 pt-2 pb-0'>
						<CardHeader className='p-4'>
							<CardTitle className='text-sm font-medium text-black md:text-base lg:text-lg'>
								<p>
									{currentFlight.flight.from} - {currentFlight.flight.to}
								</p>
							</CardTitle>
						</CardHeader>
						<CardContent className='p-0 px-4 space-y-5'>
							<Image
								src={`${currentFlight.imageUrl}`}
								alt={currentFlight.flight.to}
								width={400}
								height={450}
								className='size-full max-h-[444px] max-w-[384px] rounded-[3px] p-0 text-black'
							/>
							<p>{currentFlight.description}</p>
						</CardContent>
						<CardFooter className='p-0 px-4'>
							<Button className='items-start bg-transparent px-0 text-caption text-foreground hover:bg-transparent hover:text-muted-foreground  hover:underline  md:text-xs'>
								{t('gotoBooking')}
							</Button>
						</CardFooter>
					</Card>
				)}
				<Accordion
					defaultValue={'item-1'}
					type='single'
					className='flex flex-1 flex-col gap-6'
				>
					{topFlights?.map((item: FlightData, index: number) => (
						<AccordionItem
							key={index}
							value={`item-${index + 1}`}
							className={`w-full`}
						>
							<AccordionTrigger
								onClick={() => setCurrentFlight(item)}
								className={`flex flex-col sm:flex-row`}
							>
								<p>
									{item.flight.from} - {item.flight.to}
								</p>
								<p
									className={`ml-0 mr-5  sm:ml-auto`}
								>{`${t('startPrice')} ${item.flight.currency === 'EUR' ? `€` : '$'}${item.flight.tariff.price}`}</p>
								<Link href={`flights/${item.flight.id}`}>
									<span className='rounded-sm bg-dark_blue px-4 py-2 text-xs text-background hover:text-muted-foreground'>
										{t('button')}
									</span>
								</Link>
							</AccordionTrigger>
							<AccordionContent>
								<FlightInfo item={item.flight} />
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}
