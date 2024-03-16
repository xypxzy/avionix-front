'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/src/components/ui/accordion'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/src/components/ui/form"

import { Button } from '@/src/components/ui/button'
import { LinkEnum } from '@/src/shared/utils/route'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DiscoveryService from "@/src/services/api/discovery";
import { IFaq } from "@/src/shared/types/discovery";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/src/components/ui/input";
import {Textarea} from "@/src/components/ui/textarea";

const formSchema = z.object({
    username: z.string(),
    email: z.string().min(5, 'Min length 5 symbols').email('Invalid email'),
    message: z.string().min(10, 'You must write min 10 symbols')
})

const FrequentlyAskedQuestions = () => {
    const t = useTranslations('FAQ');
    const params = useParams();
    const [checked, setChecked] = useState(true)
    const [data, setData] = useState<IFaq[]>([]);
    const locale = useLocale();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DiscoveryService.getFaqList(locale);
                setData(response.data);
            } catch (error:any) {
                console.error('Yut have error with code error.response.request.status');
            }
        };
        fetchData();
    }, [locale, params]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        },
    })

    const onSubmit = async (values:z.infer<typeof formSchema>) => {
        try {
            const postData = await DiscoveryService.setFaqList(values);
            console.log(postData)
        } catch (error) {
            console.error('Error:', error);
        }
    }

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
                <div className={`w-full max-w-[320px]`}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-1 md:gap-4">
                        <div className={`w-full space-y-2`}>
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className={`h-8 w-full rounded-sm border border-dark_blue px-1 py-0 text-[12px] text-dark_blue focus:border-0 md:h-full md:px-4 md:py-2 md:text-sm`} placeholder={t('right_card.input_name')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className={`h-8 w-full rounded-sm border border-dark_blue px-1 py-0 text-[12px] text-dark_blue focus:border-0 md:h-full md:px-4 md:py-2 md:text-sm`} placeholder={t('right_card.input_email')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea className={`h-8 w-full rounded-sm border border-dark_blue p-1 text-[12px] text-dark_blue focus:border-0 md:h-full md:px-4 md:py-2 md:text-sm`} placeholder={t('right_card.input_area')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex w-full items-center gap-5 ">
                            <input onClick={()=>setChecked(false)} className={`scale-150 cursor-pointer`} type="checkbox" id={`terms`}/>
                            <label
                                htmlFor="terms"
                                className="max-w-[225px] cursor-pointer text-[10px] font-[400]"
                            >
                                {t('right_card.under_button')}
                            </label>
                        </div>
                        <Button disabled={checked} className={`mt-2 w-full max-w-[271px] whitespace-nowrap rounded-xl bg-light_blue py-2 transition hover:bg-dark_blue md:mt-5`} type="submit">{t('right_card.button')}</Button>
                    </form>
                </Form>
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions;
