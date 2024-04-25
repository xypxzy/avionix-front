export interface ICreateCommentType {
    description: string;
    grade: number;
    lan: string;
}

export interface StarRatingProps {
    setRating: (rating: number) => void;
    rating: number;
};

