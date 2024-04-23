import {trip} from "@/src/shared/types/topFlightsTypes";

export const determineTicketType = (type: string, data:trip) => {
    return type === 'departure' ? data?.departureTrip : data?.returnTrip;
}