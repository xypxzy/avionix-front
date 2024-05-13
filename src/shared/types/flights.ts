import { IComments } from './commentsTypes'
import { IFaq, IWhyUs } from './discovery'
import { ISpecialDealsDataType } from './specialDealsTypes'
import { FlightData } from './topFlightsTypes'

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
	text?: string
}

export interface IFlightPaymentLink {
	paymentLink: string
	paymentLinkId: string
}

export interface ISearchFlight {
	topFlights: FlightData[]
	specialDeals: ISpecialDealsDataType[]
	comments: IComments[]
	faqs: IFaq[]
	flights: FlightData[]
	whyUS: IWhyUs[]
}

export interface ISeatDetails {
	reservedSeats: string[]
	airplane: {
		make: string
		model: string
		cabin: string
		seatRow: number
		seatColumn: number
	}
}
