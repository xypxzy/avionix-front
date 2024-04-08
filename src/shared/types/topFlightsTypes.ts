export interface segments {
    takeoffIata: string,
    takeoffAt: string,
    arrivalIata: string,
    arrivalAt: string
}
export interface tariff{
    cabin: string,
    price: number,
    baggagePrice: number,
    discount: number,
    checkedBaggageIncluded: boolean,
    cabinBaggageIncluded: boolean
}
export interface itinarary {
    flightDuration: number,
    transitDuration: number,
    segments: segments[]
}
export interface flight {
    id: string,
    oneWay: boolean,
    from: string,
    to: string,
    gate: string,
    departureItinerary: itinarary,
    returnItinerary: itinarary,
    currency: string,
    tariff: tariff
}
export interface FlightData {
    imageUrl : string,
    description : string,
    flight : flight
}
export interface FlightInfoProps {
    item: FlightData
}