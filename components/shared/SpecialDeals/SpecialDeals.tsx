import { useTranslations } from 'next-intl'
import { LinkEnum } from '@/utils/route'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import data from './SpecialDeals.json'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import styles from './SpecialDeals.module.scss'
import { Card, CardContent } from '@/components/ui/card'

const SpecialDeals = () => {
        const t = useTranslations('SpecialDeals')
    return (

        <section className={styles.specialDeals__section}>
            <div className={styles.specialDeal__top}>
                <h3 className={styles.specialDeal__title}>{t('title')}</h3>
                <Link href={LinkEnum.Flights}>
                    <Button
                        variant="link"
                        className="text-foreground underline hover:text-muted-foreground"
                    >
                        {t('link')}
                    </Button>
                </Link>
            </div>
            <Carousel className="w-full">
                <CarouselContent className="-ml-1 gap-10">
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card >
                                    <CardContent className="flex flex-col gap-6 items-start justify-center h-full p-6">
                                        <img className={styles.card__image} src={item.image} alt={item.title} />
                                        <h5 className={styles.card__title}>{item.title}</h5>
                                        <p className={styles.card__promotion}>{item.promotion}</p>
                                        <Link href={LinkEnum.Flights}>
                                            <Button
                                                variant="link"
                                                className="text-foreground underline p-0"
                                            >{item.link}
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

export default SpecialDeals