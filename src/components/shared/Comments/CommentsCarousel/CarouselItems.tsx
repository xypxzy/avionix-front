import {IComments} from "@/src/shared/types/commentsTypes";
import {StarRating} from "@/src/components/StarRating/StarRating";
import { format, Locale } from 'date-fns';
import {useLocale} from "next-intl";
import { enGB, tr, ru } from "date-fns/locale";

export const CarouselItems = ({item}:{item:IComments}) => {
    const locale = useLocale()
    const lan: Locale | undefined = locale === 'ru' || locale === 'ky' ? ru : locale ==='en' ? enGB : locale === 'tr' ? tr : null
    return (
        <div className="flex flex-col gap-4 rounded-xl bg-dark_blue p-3 text-background_hero">
            <h4 className={`text-end`}>{item.author}</h4>
            <p>{item.description}</p>
            <div className={`mt-auto flex items-center justify-between`}>
                <p>{item.createdAt && locale && format(new Date(item.createdAt), 'dd MMMM yyyy', { locale: lan})}</p>
                <StarRating rating={item.grade}/>
            </div>
        </div>
    )
}