'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/src/components/ui/accordion'
import { Button } from '@/src/components/ui/button'
import { LinkEnum } from '@/src/shared/utils/route'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './FrequentlyAskedQuestions.module.scss'
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import DiscoveryService from "@/src/services/api/discovery";
import {IFaq} from "@/src/shared/types/discovery";

const FrequentlyAskedQuestions = () => {
    const t = useTranslations('FAQ')
    const params = useParams()
    const [data, setData] = useState<IFaq[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DiscoveryService.getFaqList();
                setData(response.data);
            } catch (error) {
                return <div>ERROR!!!</div>
            }
        };
        fetchData();
    }, [params]);

    return (
        <section className={styles.faq_section}>
            <div className={styles.faq_left}>
                <div className={styles.faq__title}>
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
                <Accordion type="single" collapsible className='flex flex-col gap-6'>
                    {data.map((item, index)=>(
                        <AccordionItem key={item.id} value={`item-${index+1}`}>
                            <AccordionTrigger className={styles.accordion_trigger}>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className={styles.faq__right__card}>
                <p className={styles.faq__card__title}>{t('right_card.text')}</p>
                <div className={styles.card__form}>
                    <input className="block" placeholder={t('right_card.input_name')} type="text" />
                    <input className="block" placeholder={t('right_card.input_email')} type="text" />
                    <textarea placeholder={t('right_card.input_area')} className="block" rows={3}/>
                    <button className={styles.form__button}>{t('right_card.button')}</button>
                    <p className={styles.form__button__under}>{t('right_card.under_button')}</p>
                </div>
            </div>
        </section>
    )
}
export default FrequentlyAskedQuestions