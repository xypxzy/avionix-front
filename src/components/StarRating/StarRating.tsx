
export const StarRating = ({rating}:{rating:number}) => {

    return (
        <div className="flex h-full w-1/2 items-center justify-end">
            {[...Array(5)].map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={`${rating>Math.min(rating, index) ? 'gold': 'none'}`}
                     stroke={`${rating>Math.min(rating, index) ? 'gold': '#F4F1EC'}`}>
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
            ))}
        </div>
    );
}