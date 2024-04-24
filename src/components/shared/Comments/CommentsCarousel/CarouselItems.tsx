import {IComments} from "@/src/shared/types/commentsTypes";
import {StarRating} from "@/src/components/StarRating/StarRating";

export const CarouselItems = ({item}:{item:IComments}) => {
    return (
        <div className="p-3 flex flex-col bg-dark_blue rounded-xl text-background_hero gap-4">
            <h4 className={`text-end`}>{item.author}</h4>
            <p>{item.description}</p>
            <div className={`flex justify-between mt-auto items-center`}>
                <p>{item.createdAt}</p>
                <StarRating rating={item.grade}/>
            </div>
        </div>
    )
}