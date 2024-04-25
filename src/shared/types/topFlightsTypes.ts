export interface Segments {
	takeoffIata: string
	takeoffAt: string
	arrivalIata: string
	arrivalAt: string
}
export interface ITariff {
	cabin: string
	price: number
	baggagePrice: number
	discount: number
	checkedBaggageIncluded: boolean
	cabinBaggageIncluded: boolean
}
export interface ITripDetails {
	flightDuration: number
	transitDuration: number
	segments: Segments[]
}

export interface ITrip {
	departureTrip: ITripDetails
	returnTrip: ITripDetails
}

export interface IFlight {
	id: string
	airline: string
	number: string
	airlineImageUrl: string
	oneWay: boolean
	from: string
	to: string
	gate: string
	departureTrip: ITripDetails
	returnTrip: ITripDetails
	currency: string
	status: string
	tariff: ITariff
}
export interface FlightData {
	imageUrl: string
	description: string
	flight: IFlight
}

export interface IFlightDataResponse {
	data: IFlight[]
	meta: {
		page: number
		pageSize: number
		next: string
		prev: string
		total: number
	}
}

export interface BookingWindowProps {
	closeBtn: (value: boolean) => void
	data?: IFlight | undefined
}

export interface BookingDetailProps {
	data?: IFlight
	type: 'departure' | 'return'
}
