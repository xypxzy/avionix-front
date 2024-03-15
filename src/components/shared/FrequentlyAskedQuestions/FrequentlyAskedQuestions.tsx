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
            } catch (error:any) {
                return <div>Yut have error with code {error.response.request.status}</div>
            }
        };
        fetchData();
    }, [params]);

    return (
        <section className={`flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between`}>
            <div className={`w-full max-w-screen-md md:max-w-screen-sm`}>
                <div className={`mb-7 flex items-center justify-between`}>
                    <h3 className="text-xl font-medium">{t('title')}</h3>
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
                            <AccordionTrigger className={`bg-light_blue text-lg font-normal text-dark_blue`}>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className={`mt-16 flex w-full max-w-screen-md flex-col items-center justify-between gap-6 rounded-xl border-2 border-dark_blue bg-primary p-4 text-background sm:flex-row md:p-12`}>
                <p className={`w-full max-w-[300px] text-xs font-medium`}>{t('right_card.text')}</p>
                <div className={`flex w-full max-w-[320px] flex-col items-center gap-1 md:gap-4`}>
                    <input className="w-full rounded-sm border border-dark_blue px-4 py-2" placeholder={t('right_card.input_name')} type="text" />
                    <input className="w-full rounded-sm border border-dark_blue px-4 py-2" placeholder={t('right_card.input_email')} type="text" />
                    <textarea placeholder={t('right_card.input_area')} className="w-full rounded-sm border border-dark_blue px-4 py-2" rows={3}/>
                    <button className={`mt-2 w-full max-w-[271px] whitespace-nowrap rounded-xl bg-light_blue py-2 md:mt-5`}>{t('right_card.button')}</button>
                    <p className={`max-w-[225px] text-[12px] font-[400]`}>{t('right_card.under_button')}</p>
                </div>
            </div>
        </section>
    )
}
export default FrequentlyAskedQuestions