import { Star } from "lucide-react";
import React, { useState } from "react";
import {StarRatingProps} from "@/src/shared/types/createCommentType";

export const StarRating: React.FC<StarRatingProps> = ({ setRating, rating }) => {
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);

    const handleHover = (star: number) => {
        setHoveredRating(star);
    };

    const handleClick = (star: number) => {
        setRating(star);
    };

    return (
        <div className={`my-1 flex justify-center`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    fill={(hoveredRating !== null && star <= hoveredRating) || star <= rating ? 'gold' : 'none'}
                    className={`size-14 cursor-pointer ${((hoveredRating !== null && star <= hoveredRating) || star <= rating) ? 'text-gold' : 'text-background_hero'}`}
                    onClick={() => handleClick(star)}
                    onMouseEnter={() => handleHover(star)}
                    onMouseLeave={() => setHoveredRating(null)}
                />
            ))}
        </div>
    );
};
