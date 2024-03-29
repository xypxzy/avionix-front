'use client'
import Link from "next/link";
import {LinkEnum} from "@/src/shared/utils/route";
import {Button} from "@/src/components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/src/components/ui/accordion";
import {useEffect, useState} from "react";
import DiscoveryService from "@/src/services/api/discovery";
import {useLocale, useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {IFaq} from "@/src/shared/types/discovery";

const FaqAccordion = () => {
    const t = useTranslations('FAQ');
    const params = useParams();
    const [Loading, setLoading] = useState(true);
    const [data, setData] = useState<IFaq[]>([]);
    const locale = useLocale();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DiscoveryService.getFaqList(locale);
                setData(response.data);
                setLoading(false);

            } catch (error:any) {
                console.error('Yut have error with code error.response.request.status');
                setLoading(false);
            }
        };
        fetchData();
    }, [locale, params]);
    return (
            Loading ? <div className={`w-full max-w-[480px] text-center text-lg md:text-2xl`}>{t('loading')}</div> :
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
                        {data.map((item, index) => (
                            <AccordionItem key={item.id} value={`item-${index + 1}`}>
                                <AccordionTrigger
                                    className={`bg-light_blue text-lg font-normal text-dark_blue`}>{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
    )
}

export {FaqAccordion}