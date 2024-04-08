import React from "react";
import {useTranslations} from "next-intl";
import {formatMinutesToHoursAndMinutes, formatDateFromString} from "@/src/shared/utils/timeConverter";
import {FlightInfoProps} from "@/src/shared/types/topFlightsTypes";

export const FlightInfo:React.FC<FlightInfoProps> = ({item}) => {
    const t = useTranslations('top-flights');

    return (
        item ? (
            item.flight.oneWay ?
            <div className={'flex w-full flex-col justify-between gap-10 md:flex-row'}>
                <div className={`flex flex-col`}>
                    <p>{item.flight.from}</p>
                    <p className={`mt-auto text-xs`}>{formatDateFromString(item.flight.departureItinerary.segments[0].takeoffAt)}</p>
                </div>
                <div className={`w-full max-w-[430px] md:ml-auto`}>
                    <div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
                        <p className={`text-sm font-medium text-primary`}>{t('departure')}</p>
                        <p className={`font-bold md:mx-auto`}>{item.flight.departureItinerary.flightDuration}</p>
                        <p className={`text-sm font-medium text-primary md:ml-auto`}>{t('arrival')}</p>
                    </div>
                    <div className={`font-medium text-primary`}>{`>------------------------------------------>`}</div>
                    <div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
                        <p className={`text-sm font-medium text-primary`}>{item.flight.departureItinerary.segments[0].takeoffIata}</p>
                        <p className={`font-bold md:mx-auto`}>Pegasus</p>
                        <p className={`text-sm font-medium text-primary md:ml-auto`}>{item.flight.departureItinerary.segments[0].arrivalIata}</p>
                    </div>
                </div>
                <div className={`flex flex-col md:ml-auto `}>
                    <p className={`md:ml-auto`}>{item.flight.to}</p>
                    <p className={`mt-auto text-end text-xs`}>{formatDateFromString(item.flight.departureItinerary.segments[1].arrivalAt)}</p>
                </div>
            </div>
                :
                <div>
                    <div className={'flex w-full flex-col justify-between gap-10 md:flex-row'}>
                        <div className={`flex flex-col`}>
                            <p>{item.flight.from}</p>
                            <p className={`mt-auto text-xs`}>{formatDateFromString(item.flight.departureItinerary.segments[0].takeoffAt)}</p>
                        </div>
                        <div className={`w-full max-w-[430px] md:ml-auto`}>
                            <div className={`grid grid-cols-1 items-center gap-1 md:grid-cols-3`}>
                                <p className={`text-sm font-medium text-primary`}>{t('departure')}</p>
                                <p className={`text-caption font-bold md:mx-auto`}>{formatMinutesToHoursAndMinutes(item.flight.departureItinerary.flightDuration)}</p>
                                <p className={`text-sm font-medium text-primary md:ml-auto`}>{t('arrival')}</p>
                            </div>
                            <div
                                className={`font-medium text-primary`}>{`>------------------------------------------>`}</div>
                            <div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
                                <p className={`text-sm font-medium text-primary`}>{item.flight.departureItinerary.segments[0].takeoffIata}</p>
                                <p className={`font-bold md:mx-auto`}>Pegasus</p>
                                <p className={`text-sm font-medium text-primary md:ml-auto`}>{item.flight.departureItinerary.segments[1].arrivalIata}</p>
                            </div>
                        </div>
                        <div className={`flex flex-col md:ml-auto `}>
                            <p className={`md:ml-auto`}>{item.flight.to}</p>
                            <p className={`mt-auto text-end text-xs`}>{formatDateFromString(item.flight.departureItinerary.segments[1].arrivalAt)}</p>
                        </div>
                    </div>
                    <div className={`my-4 h-[1px] w-full bg-dark_blue`}></div>
                    <div className={'flex w-full flex-col justify-between gap-10 md:flex-row'}>
                        <div className={`flex flex-col`}>
                            <p>{item.flight.from}</p>
                            <p className={`mt-auto text-xs`}>{formatDateFromString(item.flight.returnItinerary.segments[1].arrivalAt)}</p>
                        </div>
                        <div className={`w-full max-w-[430px] md:ml-auto`}>
                            <div className={`grid grid-cols-1 items-center gap-1 md:grid-cols-3`}>
                                <p className={`text-sm font-medium text-primary`}>{t('arrival')}</p>
                                <p className={`text-caption font-bold md:mx-auto`}>{formatMinutesToHoursAndMinutes(item.flight.returnItinerary.flightDuration)}</p>
                                <p className={`text-sm font-medium text-primary md:ml-auto`}>{t('departure')}</p>
                            </div>
                            <div
                                className={`font-medium text-primary`}>{`<------------------------------------------<`}</div>
                            <div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
                                <p className={`text-sm font-medium text-primary`}>{item.flight.returnItinerary.segments[1].arrivalIata}</p>
                                <p className={`font-bold md:mx-auto`}>Pegasus</p>
                                <p className={`text-sm font-medium text-primary md:ml-auto`}>{item.flight.returnItinerary.segments[0].takeoffIata}</p>
                            </div>
                        </div>
                        <div className={`flex flex-col md:ml-auto `}>
                            <p className={`md:ml-auto`}>{item.flight.to}</p>
                            <p className={`mt-auto text-end text-xs`}>{formatDateFromString(item.flight.returnItinerary.segments[0].takeoffAt)}</p>
                        </div>
                    </div>
                </div>
        ) : (
            <div>Data is not loading</div>
        )
    );
};
