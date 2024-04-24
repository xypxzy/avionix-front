'use client'
import {useLocale, useTranslations} from "next-intl";
import {CarouselItems} from "@/src/components/shared/Comments/CommentsCarousel/CarouselItems";
import {useQuery} from "@tanstack/react-query";
import clientService from "@/src/services/api/client-host";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/src/components/ui/carousel";
import {IComments} from "@/src/shared/types/commentsTypes";
export const Comments = () => {
    const t = useTranslations('comments')
    const locale = useLocale()
    const { data: comments, isLoading } = useQuery<IComments[]>({
        queryKey: ['comments'],
        queryFn: () => clientService.getCustomersComments(locale),
    })
    return (
        <section className={`border-b-2 border-b-pagination pb-20`}>
            <h3 className={`text-base font-bold md:text-lg lg:text-xl my-5`}>{t('title')}</h3>
            {isLoading
                ?
                <div className={`w-full py-20 text-center text-lg md:text-2xl`}>
                    {t('loading')}
                </div>
                :
                <Carousel
                opts={{align: "start",}}
                className="w-full">
                    <CarouselContent className={''}>
                        {comments?.map((item:IComments, index:number) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 relative flex">
                                <CarouselItems item={item}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className={`absolute right-14 top-[-40px] max-w-2 w-full`}>
                        <CarouselPrevious className={`rounded-[8px] bg-dark_blue size-12 text-background_hero`}/>
                        <CarouselNext className={`rounded-[8px] bg-dark_blue size-12 text-background_hero`}/>
                    </div>
                </Carousel>
            }

        </section>
    )
}