import {flight} from "@/src/shared/types/topFlightsTypes";

export interface ISpecialDealsDataType {
    imageUrl: string,
    description: string,
    discount?: string,
    flight: flight
}

export interface ISpecialDealsProps {
    items: ISpecialDealsDataType[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}
