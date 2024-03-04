"use client";
import data from './SpecialDeals.json'
import React from "react";
import { InfiniteMovingCards } from "@/src/components/ui/infinite-moving-cards";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {LinkEnum} from "@/src/utils/route";
import {Button} from "@/src/components/ui/button";

export function SpecialDeals() {
    const t = useTranslations('SpecialDeals')
    return (

        <section className="flex h-[650px] w-full flex-col items-center justify-center rounded antialiased">
            <div className="flex w-full items-center justify-between">
                <h3 className="text-xl">{t('title')}</h3>
                <Link href={LinkEnum.Flights}>
                    <Button
                        variant="link"
                        className="text-foreground underline hover:text-muted-foreground"
                    >
                        {t('link')}
                    </Button>
                </Link>
            </div>
            <InfiniteMovingCards
                items={data}
                direction="left"
                speed="slow"
            />
        </section>
    );
}


