export interface FlightData {
    from: string;
    to: string;
    startPrice: string;
    departure: string;
    arrival: string;
    airline: string;
    dateFrom: string;
    dateTo: string;
    flightDuration: string;
    posterImg: string;
}

export interface LanguageData {
    lan: string;
    data: FlightData[];
}
