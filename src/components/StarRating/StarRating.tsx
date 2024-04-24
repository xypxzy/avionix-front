import {StarIcon} from "@heroicons/react/16/solid";

export const StarRating = ({rating}:{rating:number}) => {

    return (
        <div className="flex items-center justify-end w-1/2 h-full">
            {[...Array(5)].map((_, index) => (
                <StarIcon key={index} className={`size-10 ${rating>Math.min(index, rating) ? 'text-gold' : ''}`}/>
            ))}
        </div>
    );
}