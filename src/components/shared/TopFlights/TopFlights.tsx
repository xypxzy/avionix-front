'use client'

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
import { FlightData, LanguageData } from '@/src/shared/types/topFlightsTypes'
import { LinkEnum } from '@/src/shared/utils/route'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import data from './topFlightsData.json'

export default function TopFlights() {
	const [selectedAccordionContent, setSelectedAccordionContent] = useState<
		FlightData | undefined
	>(undefined)
	const t = useTranslations('top-flights')
	const locale = useLocale()
	const handleAccordionClick = (content: FlightData): void => {
		setSelectedAccordionContent(content)
	}
	useEffect(() => {
		if (data && data.length > 0) {
			setSelectedAccordionContent(data[0].data[0])
		}
	}, [])

	return (
		<section>
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
				<Card className='flex w-full flex-col justify-between rounded-sm border-2 lg:w-1/4'>
					<CardHeader className='p-4'>
						<CardTitle className='text-sm font-normal text-black md:text-base lg:text-lg'>
							{selectedAccordionContent && (
								<p>
									{selectedAccordionContent.from} -{' '}
									{selectedAccordionContent.to}
								</p>
							)}
						</CardTitle>
					</CardHeader>
					<CardContent className='pb-0 pt-4'>
						{selectedAccordionContent && selectedAccordionContent.posterImg && (
							<Image
								src={`/assets/topFlights/${selectedAccordionContent.posterImg}`}
								alt={selectedAccordionContent.to}
								width={250}
								height={250}
								className='size-full rounded-[3px] text-black'
							/>
						)}
					</CardContent>
					<CardFooter className='flex-1 items-end px-6 py-1'>
						<Link href={LinkEnum.Flights}>
							<Button
								variant='link'
								className='items-start px-0 text-caption text-foreground hover:text-muted-foreground  sm:text-sm  md:text-base'
							>
								{t('gotoBooking')}
							</Button>
						</Link>
					</CardFooter>
				</Card>

				<Accordion type='multiple' className='flex flex-1 flex-col gap-6'>
					{data.map(
						(item: LanguageData, index: number) =>
							locale === item.lan &&
							item.data.map((el: FlightData, innerIndex: number) => (
								<AccordionItem
									key={index + '-' + innerIndex}
									value={`item-${innerIndex + 1}`}
								>
									<AccordionTrigger
										onClick={() => handleAccordionClick(el)}
										className={`flex flex-col sm:flex-row`}
									>
										<p>
											{el.from} - {el.to}
										</p>
										<p className={`ml-0 mr-5  sm:ml-auto`}>
											{`${t('startPrice')} ${el.startPrice}`}
										</p>
										<Link
											href={LinkEnum.Flights}
											className='inline-flex items-center justify-center whitespace-nowrap rounded-md bg-dark_blue p-2 text-sm text-background underline-offset-4 hover:text-muted-foreground'
										>
											{t('button')}
										</Link>
									</AccordionTrigger>
									<AccordionContent
										className={`flex flex-col justify-between gap-10 md:flex-row`}
									>
										<div className={`flex flex-col`}>
											<p>{el.from}</p>
											<p className={`mt-auto`}>{el.dateFrom}</p>
										</div>
										<div className={`w-full max-w-[430px] md:ml-auto`}>
											<div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
												<p className={`text-sm font-medium text-primary`}>
													{t('departure')}
												</p>
												<p className={`font-bold md:mx-auto`}>
													{el.flightDuration}
												</p>
												<p
													className={`text-sm font-medium text-primary md:ml-auto`}
												>
													{t('arrival')}
												</p>
											</div>
											<div
												className={`font-medium text-primary`}
											>{`>------------------------------------------>`}</div>
											<div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
												<p className={`text-sm font-medium text-primary`}>
													{el.departure}
												</p>
												<p className={`font-bold md:mx-auto`}>{el.airline}</p>
												<p
													className={`text-sm font-medium text-primary md:ml-auto`}
												>
													{el.arrival}
												</p>
											</div>
										</div>
										<div className={`flex flex-col md:ml-auto`}>
											<p className={`md:ml-auto`}>{el.to}</p>
											<p className={`mt-auto`}>{el.dateTo}</p>
										</div>
									</AccordionContent>
								</AccordionItem>
							))
					)}
				</Accordion>
			</div>
		</section>
	)
}
