export interface IWhyUs {
    id: string;
    logoUrl: string;
    title: string;
    description: string;
}
export default interface ISlidesProps {
    index: number
    data: IWhyUs
}

export interface IFaq {
    id: string;
    question: string;
    answer: string;
}

export interface IAirlineRating {
    name: string,
    imageUrl: string,
    rating: number
}