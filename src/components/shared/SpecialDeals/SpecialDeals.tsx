"use client";
import data from './SpecialDeals.json'
import React from "react";
import { InfiniteMovingCards } from "@/src/components/ui/infinite-moving-cards";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {LinkEnum} from "@/src/shared/utils/route";
import {Button} from "@/src/components/ui/button";

export function SpecialDeals() {
    const t = useTranslations('SpecialDeals')
    const isLoading = false
    // const [isLoading, setIsLoading] = useState(false)
    return (
        isLoading ? <div className={`w-full py-20 text-center text-lg md:text-2xl`}>{t('loading')}</div> :
        <section className="flex size-full max-h-[750px] flex-col items-center justify-center rounded antialiased">
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
            <div className={`mb-5 sm:mb-10 sm:mt-2 md:mb-16 md:mt-5 lg:mb-24 lg:mt-10`}>
                <InfiniteMovingCards
                    items={data}
                    direction="left"
                    speed="fast"
                />
            </div>
        </section>
    );
}


