import React from "react";
import {useLocale, useTranslations} from "next-intl";
import {minutesToString, customGetFullDate} from "@/src/shared/utils/timeConverter";
import {FlightData} from "@/src/shared/types/topFlightsTypes";

export const FlightInfo:React.FC<{item:FlightData}> = ({ item }) => {
    const t = useTranslations('top-flights');
    const locale = useLocale()
    return (
        item ? (
            item.flight.oneWay ?
            <div className={'flex w-full flex-col justify-between gap-10 md:flex-row'}>
                <div className={`flex flex-col`}>
                    <p>{item.flight.from}</p>
                    <p className={`mt-auto text-xs`}>{customGetFullDate(item.flight.departureTrip.segments[0].takeoffAt, locale)}</p>
                </div>
                <div className={`w-full max-w-[430px] md:ml-auto`}>
                    <div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
                        <p className={`text-sm font-medium text-primary`}>{t('departure')}</p>
                        <p className={`font-bold md:mx-auto`}>{item.flight.departureTrip.flightDuration}</p>
                        <p className={`text-sm font-medium text-primary md:ml-auto`}>{t('arrival')}</p>
                    </div>
                    <div className={`font-medium text-primary`}>{`>------------------------------------------>`}</div>
                    <div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
                        <p className={`text-sm font-medium text-primary`}>{item.flight.departureTrip.segments[0].takeoffIata}</p>
                        <p className={`text-xs font-bold md:mx-auto`}>{item.flight.airline}</p>
                        <p className={`text-sm font-medium text-primary md:ml-auto`}>{item.flight.departureTrip.segments[0].arrivalIata}</p>
                    </div>
                </div>
                <div className={`flex flex-col md:ml-auto `}>
                    <p className={`md:ml-auto`}>{item.flight.to}</p>
                    <p className={`mt-auto text-end text-xs`}>{customGetFullDate(item.flight.departureTrip.segments[1].arrivalAt, locale)}</p>
                </div>
            </div>
                :
                <div>
                    <div className={'flex w-full flex-col justify-between gap-10 md:flex-row'}>
                        <div className={`flex flex-col`}>
                            <p>{item.flight.from}</p>
                            <p className={`mt-auto text-xs`}>{customGetFullDate(item.flight.departureTrip.segments[0].takeoffAt, locale)}</p>
                        </div>
                        <div className={`w-full max-w-[430px] md:ml-auto`}>
                            <div className={`grid grid-cols-1 items-center gap-1 md:grid-cols-3`}>
                                <p className={`text-sm font-medium text-primary`}>{t('departure')}</p>
                                <p className={`text-caption font-bold md:mx-auto`}>{minutesToString(item.flight.departureTrip.flightDuration)}</p>
                                <p className={`text-sm font-medium text-primary md:ml-auto`}>{t('arrival')}</p>
                            </div>
                            <div
                                className={`font-medium text-primary`}>{`>------------------------------------------>`}</div>
                            <div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
                                <p className={`text-sm font-medium text-primary`}>{item.flight.departureTrip.segments[0].takeoffIata}</p>
                                <p className={`text-xs font-bold md:mx-auto`}>{item.flight.airline}</p>
                                <p className={`text-sm font-medium text-primary md:ml-auto`}>{item.flight.departureTrip.segments[1].arrivalIata}</p>
                            </div>
                        </div>
                        <div className={`flex flex-col md:ml-auto `}>
                            <p className={`md:ml-auto`}>{item.flight.to}</p>
                            <p className={`mt-auto text-end text-xs`}>{customGetFullDate(item.flight.departureTrip.segments[1].arrivalAt, locale)}</p>
                        </div>
                    </div>
                    <div className={`my-4 h-[1px] w-full bg-dark_blue`}></div>
                    <div className={'flex w-full flex-col justify-between gap-10 md:flex-row'}>
                        <div className={`flex flex-col`}>
                            <p>{item.flight.from}</p>
                            <p className={`mt-auto text-xs`}>{customGetFullDate(item.flight.returnTrip.segments[1].arrivalAt, locale)}</p>
                        </div>
                        <div className={`w-full max-w-[430px] md:ml-auto`}>
                            <div className={`grid grid-cols-1 items-center gap-1 md:grid-cols-3`}>
                                <p className={`text-sm font-medium text-primary`}>{t('arrival')}</p>
                                <p className={`text-caption font-bold md:mx-auto`}>{minutesToString(item.flight.returnTrip.flightDuration)}</p>
                                <p className={`text-sm font-medium text-primary md:ml-auto`}>{t('departure')}</p>
                            </div>
                            <div
                                className={`font-medium text-primary`}>{`<------------------------------------------<`}</div>
                            <div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
                                <p className={`text-sm font-medium text-primary`}>{item.flight.returnTrip.segments[1].arrivalIata}</p>
                                <p className={`text-xs font-bold md:mx-auto`}>{item.flight.airline}</p>
                                <p className={`text-sm font-medium text-primary md:ml-auto`}>{item.flight.returnTrip.segments[0].takeoffIata}</p>
                            </div>
                        </div>
                        <div className={`flex flex-col md:ml-auto `}>
                            <p className={`md:ml-auto`}>{item.flight.to}</p>
                            <p className={`mt-auto text-end text-xs`}>{customGetFullDate(item.flight.returnTrip.segments[0].takeoffAt, locale)}</p>
                        </div>
                    </div>
                </div>
        ) : (
            <div>Data is not loading</div>
        )
    );
};
