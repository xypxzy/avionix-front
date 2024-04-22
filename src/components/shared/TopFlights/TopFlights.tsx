'use client'

import { FlightData } from "@/src/shared/types/topFlightsTypes";
import { LinkEnum } from "@/src/shared/utils/route";
import {useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import {useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordion";
import { FlightInfo } from "./FlightInfo/FlightInfo";
import { BookingWindow } from "../BookingWindow/BookingWindow";
import FlightService from '@/src/services/api/flight-host'

export default function TopFlights() {
	const [selectedAccordionContent, setSelectedAccordionContent] = useState<FlightData | undefined>(undefined);
	const [isWindowOpen, setIsWindowOpen] = useState(false)
	const [data, setData] = useState<FlightData[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const t = useTranslations('top-flights');
	const locale = useLocale();

	useEffect(() => {
		const fetchData = () => {
			FlightService.getTopFlights(locale)
				.then(response => {
					setData(response.data);
					setSelectedAccordionContent(response.data[0]);
					setIsLoading(false);
				})
				.catch(error => {
					console.error('You have an error with code', error.response?.status);
					setIsLoading(false);
				});
		};

		fetchData();
	}, [locale]);

	return (
		<section className={`relative`}>
			<div className={`my-20`}>
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
			{isLoading ? <div className={`w-full text-center text-lg md:text-2xl`}>Loading...</div>
				:
					<div className='flex flex-col gap-8 lg:flex-row'>
						<Card className='flex w-full max-w-[420px] flex-col justify-between rounded-sm border-2 py-2'>
							<CardHeader className='p-4'>
								<CardTitle className='text-sm font-medium text-black md:text-base lg:text-lg'>
									{selectedAccordionContent &&
										<p>{selectedAccordionContent.flight.from} - {selectedAccordionContent.flight.to}</p>}
								</CardTitle>
							</CardHeader>
							<CardContent className='p-0 px-4'>
								{selectedAccordionContent && selectedAccordionContent.imageUrl &&
									<img
										src={`${selectedAccordionContent.imageUrl}`}
										alt={selectedAccordionContent.flight.to}
										className='size-full max-h-[444px] max-w-[384px] rounded-[3px] p-0 text-black'
									/>
								}
							</CardContent>
							<CardFooter className='p-0 px-4 pb-2'>
								<Button onClick={()=>setIsWindowOpen(true)} className='items-start bg-transparent px-0 text-caption text-foreground hover:bg-transparent hover:text-muted-foreground  hover:underline  md:text-xs'>
									{t('gotoBooking')}
								</Button>
							</CardFooter>
						</Card>
						<Accordion defaultValue={'item-1'} type='single' collapsible className='flex flex-1 flex-col gap-6'>
							{data.slice(0, 5).map((item:FlightData, index: number) => (
								<AccordionItem key={index} value={`item-${index + 1}`} className={`w-full`}>
									<AccordionTrigger onClick={() => setSelectedAccordionContent(item)} className={`flex flex-col sm:flex-row`}>
										<p>{item.flight.from} - {item.flight.to}</p>
										<p className={`ml-0 mr-5  sm:ml-auto`}>{`${t('startPrice')} ${item.flight.currency==='EUR'? `€` :'$'}${item.flight.tariff.price}`}</p>
										<span onClick={(event) => {
											event.stopPropagation();
											setIsWindowOpen(true);
										}}  className="rounded-sm bg-dark_blue px-4 py-2 text-xs text-background hover:text-muted-foreground">
												{t('button')}
										</span>
									</AccordionTrigger>
									<AccordionContent>
										<FlightInfo item={item}/>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
			}

			</div>
			{
				isWindowOpen && <BookingWindow locale={locale} closeBtn={setIsWindowOpen} data={selectedAccordionContent?.flight}/>
			}
		</section>
	)
}
