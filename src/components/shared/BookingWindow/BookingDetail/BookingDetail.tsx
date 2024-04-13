import React from 'react';
import { customGetHours, customGetFullDate } from "@/src/shared/utils/timeConverter";
import Image from "next/image";
import { AccordionDefault, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordionDefault";
import { sitsParams } from "@/src/shared/utils/airlineSitsText";
import {CalendarDays} from "lucide-react";
import {useLocale} from "next-intl";

interface BookingDetailProps {
    data: any;
    locale: string;
    type: 'departure' | 'return';
}

const BookingDetail: React.FC<BookingDetailProps> = ({ data, type }) => {
    const tripData = type === 'departure' ? data.flight.departureTrip : data.flight.returnTrip;
    const locale:string = useLocale()

    return (
        <div className={`flex flex-col gap-5 rounded bg-dark_blue p-5 pr-9 text-white`}>
            <div className={`flex flex-col gap-3`}>
                <p className={`text-xs font-medium text-background`}>В г. {type==='departure' ? data.flight.to : data.flight.from}</p>
                <p className={`flex items-center gap-2 text-xs font-medium text-background`}>
                    <CalendarDays/>
                    {customGetFullDate(tripData.segments[0].takeoffAt, locale)}
                </p>
            </div>
            <div className={`flex flex-col gap-4 pl-11`}>
                <span
                    className={`max-w-16 rounded-sm border border-light_blue p-1.5 text-center text-caption text-light_blue`}>
                    {data.flight.tariff.cabin}
                </span>
                <div className={`flex items-center gap-5`}>
                    <div className={`text-xs font-medium`}>
                        {customGetHours(tripData.segments[0].takeoffAt)}
                    </div>
                    <div className={`flex flex-col gap-2.5`}>
                        <p className={` text-xs font-medium`}>{type==='departure' ? data.flight.from : data.flight.to}</p>
                        <p className={`text-xs font-medium text-booking`}>{tripData.segments[0].takeoffIata}</p>
                    </div>
                </div>
                <div className={`flex items-start justify-between`}>
                    <div className={`w-1/5`}>
                        <Image width={50} height={5} src={data.flight.airlineImageUrl} alt={data.flight.airline}/>
                    </div>
                    <AccordionDefault type="single" collapsible className='flex w-full flex-col gap-6'>
                        <AccordionItem value={`item-1`}>
                            <AccordionTrigger className={`p-0`}>
                                <div className={`flex gap-7 text-xs font-medium`}>{data.flight.airline}
                                    <span className={`text-light_blue`}>{customGetHours(tripData.flightDuration)}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className={`flex flex-col gap-4`}>
                                <p className={`mt-8 text-xs font-medium`}>Информация о дальнейших передвижениях</p>
                                <div className={`mt-1 flex justify-between`}>
                                    <div className={`flex gap-2`}>
                                        <Image width={20} height={15} src={data.flight.airlineImageUrl}
                                               alt={data.flight.airline}/>
                                        <span className={`text-xs font-medium text-booking`}>Авиакомпания</span>
                                    </div>
                                    <div className={`text-xs font-medium text-booking`}>{data.flight.airline}</div>
                                </div>
                                <div className={`flex justify-between`}>
                                    <div className={`flex gap-3`}>
                                        <Image width={15} height={15} src={'/assets/topFlights/info-circle.svg'}
                                               alt={'info icon'}/>
                                        <span className={`text-xs font-medium text-booking`}>Номер рейса</span>
                                    </div>
                                    <div className={`text-xs font-medium text-booking`}>{data.flight.number}</div>
                                </div>
                                <div className={`flex w-1/2 flex-col gap-2`}>
                                    <p className={`mb-4 text-xs font-medium`}>Пересадки</p>
                                    <div className={`flex flex-col gap-1 text-booking`}>
                                        <div className={`flex justify-between`}>
                                            <p className={`text-xs font-medium`}>{customGetFullDate(tripData.segments[0].arrivalAt, locale)}</p>
                                            <p className={`text-xs font-medium`}>{tripData.segments[0].arrivalIata}</p>
                                        </div>
                                        <div className={`flex justify-between`}>
                                            <p className={`text-xs font-medium`}>Время ожидания</p>
                                            <p className={`text-xs font-medium`}>{customGetHours(tripData.transitDuration)}</p>
                                        </div>
                                        <div className={`flex justify-between`}>
                                            <p className={`text-xs font-medium`}>{customGetFullDate(tripData.segments[1].takeoffAt, locale)}</p>
                                            <p className={`text-xs font-medium`}>{tripData.segments[1].takeoffIata}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6 className={`mb-4 text-xs font-medium`}>Место</h6>
                                    <div className={`flex flex-col`}>
                                        {
                                            sitsParams.map((item, index) => (
                                                <ul key={index} className={`flex flex-col gap-3`}>
                                                    {item.lan === locale ?
                                                        item.item.map((el, iIndex) =>
                                                            (
                                                                <li key={iIndex}
                                                                    className={`flex items-center justify-between`}>
                                                                    <div className={`flex items-center gap-2`}>
                                                                        <Image width={17} height={17}
                                                                               src={`/assets/topFlights/${el.icon}`}
                                                                               alt={el.text}/>
                                                                        <p className={`text-xs font-medium text-booking`}>{el.text}</p>
                                                                    </div>
                                                                    <span className={`text-xs font-medium text-booking`}>{el.params}</span>
                                                                </li>
                                                            ))
                                                        :
                                                        ''
                                                    }
                                                </ul>
                                            ))
                                        }
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </AccordionDefault>
                </div>
                <div className={`flex items-center gap-5`}>
                    <div className={` text-xs font-medium`}>
                        {customGetHours(tripData.segments[1].arrivalAt)}
                    </div>
                    <div className={`flex flex-col gap-2.5`}>
                        <p className={` text-xs font-medium`}>{type==='departure' ? data.flight.to : data.flight.from}</p>
                        <p className={`text-xs font-medium text-booking`}>{tripData.segments[1].arrivalIata}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetail;
