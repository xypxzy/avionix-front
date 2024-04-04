"use client"
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Client_Service from "@/src/services/api/client-host";
import styles from '@/src/components/common/Footer/Footer.module.css';
import { IAirlineRating } from "@/src/shared/types/discovery";
import { LinkEnum } from "@/src/shared/utils/route";

const AirlinesRating = () => {
    const [data, setData] = useState<IAirlineRating[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Client_Service.getAirlineRatingList();
                setData(response.data);
                setIsLoading(false);

            } catch (error: any) {
                console.error(`Yut have error with ${error}`);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const t = useTranslations('AirlineRating');

    // Функция для добавления классов gold, silver и bronze к трем самым высоким рейтингам
    const addMedalClass = (index: number) => {
        if (index === 0) return 'bg-gold';
        if (index === 1) return 'bg-silver';
        if (index === 2) return 'bg-bronze';
        return '';
    };

    // Сортировка массива по убыванию рейтинга и взятие трех самых высоких элементов
    const topThreeRatings = data.sort((a, b) => b.rating - a.rating);

    return (
        <section className={`${styles.full_bleed} flex flex-col items-center justify-center gap-12 bg-dark_blue p-4 sm:py-8 md:py-16 lg:px-4 lg:py-[110px]`}>
            <h3 className={`mb-10 text-base font-medium text-background md:text-lg lg:text-xl `}>{t('title')}</h3>
            {isLoading ?
                <div className={`w-full text-center text-lg text-white md:text-2xl`}>Loading...</div>
                :
                <div className={`grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3`}>
                    {topThreeRatings.map((item: IAirlineRating, index: number) => (
                        <Link href={`*`} className={`relative flex max-h-[232px] w-full max-w-[300px] flex-col items-center justify-center gap-5 rounded-sm bg-background px-8 py-4`} key={index} >
                            <img className={`max-w-[100px] md:max-w-[150px] lg:max-w-[200px]`} src={item.imageUrl} alt={item.name} />
                            <h5 className={`mt-auto text-center text-caption font-[600] md:text-sm lg:text-base`}>{item.name}</h5>
                            <div className={`rounded-[4px] p-2 text-xs font-medium md:text-sm lg:text-base ${addMedalClass(index)} border`}>
                                {item.rating}/10
                            </div>
                        </Link>
                    ))}
                </div>
            }
            <Link href={LinkEnum.Flights} className={`ml-auto`}>
                <Button
                    variant="link"
                    className="text-background underline hover:text-muted-foreground"
                >
                    {t('link')}
                </Button>
            </Link>
        </section>
    )
}

export default AirlinesRating;
