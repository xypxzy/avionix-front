'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { LinkEnum } from '@/utils/route'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './FAQ.module.scss'

const FAQ = () => {
    const t = useTranslations('FAQ')
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
                        <AccordionItem value="item-1">
                            <AccordionTrigger className={styles.accordion_trigger}>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className={styles.accordion_trigger}>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className={styles.accordion_trigger}>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className={styles.accordion_trigger}>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
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

export default FAQ
