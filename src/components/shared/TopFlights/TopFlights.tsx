'use client'
import React, {useEffect, useState} from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card';
import { LinkEnum } from '@/src/shared/utils/route';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import FlightService from '@/src/services/api/flight-host'
import {FlightData} from '@/src/shared/types/topFlightsTypes'
import {FlightInfo} from "@/src/components/shared/TopFlights/FlightInfo/FlightInfo";
import Image from "next/image";


export default function TopFlights() {
	const [selectedAccordionContent, setSelectedAccordionContent] = useState<FlightData | undefined>(undefined);
	const [data, setData] = useState<FlightData[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const t = useTranslations('top-flights');
	const locale = useLocale();
	const handleAccordionClick = (content:FlightData):void => {
		setSelectedAccordionContent(content);
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await FlightService.getTopFlights(locale)
				setData(response.data);
				console.log(response.data)
				setSelectedAccordionContent(response.data[0])
				setIsLoading(false);

			} catch (error:any) {
				console.error('Yut have error with code error.response.request.status');
				setIsLoading(false);
			}
		};
		fetchData();
	}, [locale]);

	return (
		<section>
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
									<Image
										width={444}
										height={384}
										src={`${selectedAccordionContent.imageUrl}`}
										alt={selectedAccordionContent.flight.to}
										className='size-full max-h-[444px] max-w-[384px] rounded-[3px] text-black p-0'
									/>
								}
							</CardContent>
							<CardFooter className='p-0 px-4 pb-2'>
								<Link href={LinkEnum.Flights} className='items-start px-0 text-caption text-foreground hover:underline  hover:text-muted-foreground  md:text-xs'>
									{t('gotoBooking')}
								</Link>
							</CardFooter>
						</Card>
						<Accordion defaultValue={'item-1'} type='single' collapsible className='flex flex-1 flex-col gap-6'>
							{data.slice(0, 5).map((item, index: number) => (
								<AccordionItem key={index} value={`item-${index + 1}`} className={`w-full`}>
									<AccordionTrigger onClick={() => setSelectedAccordionContent(item)} className={`flex flex-col sm:flex-row`}>
										<p>{item.flight.from} - {item.flight.to}</p>
										<p className={`ml-0 mr-5  sm:ml-auto`}>{`${t('startPrice')} ${item.flight.currency==='EUR'? `€` :'$'}${item.flight.tariff.price}`}</p>
										<Link href={LinkEnum.Flights} className="rounded bg-dark_blue px-3 py-1 text-xs text-background hover:text-muted-foreground">
												{t('button')}
										</Link>
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
		</section>
	);
}
