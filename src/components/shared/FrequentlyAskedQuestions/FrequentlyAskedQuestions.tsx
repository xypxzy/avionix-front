'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../../../../../avionix-front — копия/src/components/ui/accordion'
import { Button } from '../../../../../avionix-front — копия/src/components/ui/button'
import { LinkEnum } from '../../../../../avionix-front — копия/src/utils/route'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './FrequentlyAskedQuestions.module.scss'
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import axios from "axios";
import {FAQItem} from "../../../../../avionix-front — копия/src/types/FAQ";
const getFAQ = async (lan: string | string[]): Promise<FAQItem[]> => {
    const baseUrl = `http://localhost:8072/avionix/discovery/api/faq?lan=${lan}`;
    try {
        const response = await axios.get(baseUrl);
        console.log('Данные получены:', response.data);
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
    }
};
const FrequentlyAskedQuestions = () => {
    const t = useTranslations('FAQ')
    const params = useParams()
    const [data, setData] = useState<FAQItem[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getFAQ(params.locale);
                setData(result);
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
