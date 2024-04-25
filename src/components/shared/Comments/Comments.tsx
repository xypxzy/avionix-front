'use client'
import {useLocale, useTranslations} from "next-intl";
import {CarouselItems} from "@/src/components/shared/Comments/CommentsCarousel/CarouselItems";
import {useQuery} from "@tanstack/react-query";
import clientService from "@/src/services/api/client-host";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/src/components/ui/carousel";
import {IComments} from "@/src/shared/types/commentsTypes";
import {CommentsSkeleton} from "@/src/components/shared/Comments/Comments.skeleton";
export const Comments = () => {
    const t = useTranslations('comments')
    const locale = useLocale()
    const { data: comments, isLoading } = useQuery<IComments[]>({
        queryKey: ['comments'],
        queryFn: () => clientService.getCustomersComments(locale),
    })
    
    if(isLoading) {
        return <CommentsSkeleton/>
    }
    return (
        <section className={`border-b-2 border-b-pagination pb-20`}>
            <h3 className={`my-5 text-base font-bold md:text-lg lg:text-xl`}>{t('title')}</h3>
            <Carousel opts={{align: "start",}} className="w-full">
                <CarouselContent className={''}>
                    {comments?.map((item:IComments, index:number) => (
                        <CarouselItem key={index} className="relative flex md:basis-1/2 lg:basis-1/3">
                            <CarouselItems item={item}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className={`absolute right-14 top-[-40px] w-full max-w-2`}>
                    <CarouselPrevious className={`size-12 rounded-[8px] bg-dark_blue text-background_hero`}/>
                    <CarouselNext className={`size-12 rounded-[8px] bg-dark_blue text-background_hero`}/>
                </div>
            </Carousel>
        </section>
    )
}