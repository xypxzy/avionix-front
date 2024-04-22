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
export interface tripDetails {
    flightDuration: number,
    transitDuration: number,
    segments: segments[]
}

export interface trip {
    departureTrip: tripDetails,
    returnTrip: tripDetails
}

export interface flight {
    id: string,
    airline: string,
    number:string,
    airlineImageUrl: string,
    oneWay: boolean,
    from: string,
    to: string,
    gate: string,
    departureTrip: tripDetails,
    returnTrip: tripDetails,
    currency: string,
    status: string,
    tariff: tariff
}
export interface FlightData {
    imageUrl : string,
    description : string,
    flight : flight
}

export interface BookingWindowProps {
    closeBtn: (value: boolean) => void;
    data?: flight | undefined;
    locale: string;
}

export interface BookingDetailProps {
    data?: flight;
    type: 'departure' | 'return';
}