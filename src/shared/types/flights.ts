export interface IFlightCity {
	code: string
	name: string
}

export interface IFlightQueryParams {
	lan?: string
	origin?: string
	destination?: string
	oneWay?: string
	departureDate?: string
	returnDate?: string
	adults?: string
}
