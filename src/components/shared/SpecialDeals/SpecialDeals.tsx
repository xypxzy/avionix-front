"use client";
import React, {useEffect, useState} from "react";
import { InfiniteMovingCards } from "@/src/components/ui/infinite-moving-cards";
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";
import {LinkEnum} from "@/src/shared/utils/route";
import {Button} from "@/src/components/ui/button";
import FlightService from "@/src/services/api/flight-host";
import {ISpecialDealsDataType} from "@/src/shared/types/specialDealsTypes";

export function SpecialDeals() {
    const t = useTranslations('SpecialDeals')
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<ISpecialDealsDataType[]>()
    const locale = useLocale()

    useEffect(() => {
        const fetchData = () => {
            FlightService.getSpecialDeals(locale)
                .then(response => {
                    setData(response.data);
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

        <section className="flex size-full h-[350px] sm:h-[550px] lg:h-[700px] flex-col items-center justify-start rounded antialiased">
            <div className="mt-5 flex w-full flex-col items-start justify-between sm:mt-10 sm:flex-row sm:items-center md:mt-16 lg:mt-24">
                <h3 className="text-base font-bold md:text-lg lg:text-xl">{t('title')}</h3>
                <Link href={LinkEnum.Flights}>
                    <Button
                        variant="link"
                        className="p-0 text-foreground underline hover:text-muted-foreground"
                    >
                        {t('link')}
                    </Button>
                </Link>
            </div>
            <div className={`absolute top-[5750px] sm:top-[5300px] md:top-[3500px] lg:top-[2600px] mb-5 max-h-[550px] size-full sm:mb-10 sm:mt-2 md:mb-16 md:mt-5 lg:mb-24 lg:mt-10`}>
                {
                    isLoading ? <div className={`w-full py-20 text-center text-lg md:text-2xl`}>{t('loading')}</div> :
                        data ? <InfiniteMovingCards
                            items={data}
                            direction="left"
                            speed="fast"
                        /> : null
                }
            </div>
        </section>
    );
}


