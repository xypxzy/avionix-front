import { client } from '@/src/services/axios'
import {
	IFlightCity,
	IFlightPaymentLink,
	IFlightQueryParams,
	ISearchFlight,
	ISeatDetails,
} from '@/src/shared/types/flights'
import { ITicketBook } from '@/src/shared/types/schemas/ticketBook'
import { ISpecialDealsDataType } from '@/src/shared/types/specialDealsTypes'
import {
	FlightData,
	IFlight,
	IFlightDataResponse,
} from '@/src/shared/types/topFlightsTypes'
import axios from 'axios'

const FLIGHT_URL = 'flight/api'

class FlightService {
	async getFlights(params: IFlightQueryParams) {
		return await client
			.get<IFlightDataResponse>(`${FLIGHT_URL}/trip`, {
				params,
			})
			.then(res => res.data)
	}

	async getFlight(id: string, params: IFlightQueryParams) {
		return await client
			.get<IFlight>(`${FLIGHT_URL}/trip/${id}`, {
				params,
			})
			.then(res => res.data)
	}

	async getFlightLink(id: string, checkedBaggageIncluded: boolean) {
		return await client
			.get<IFlightPaymentLink>(`${FLIGHT_URL}/ticket/paymentLink`, {
				params: {
					flightId: id,
					checkedBaggageIncluded,
				},
			})
			.then(res => res.data)
	}

	async getCities(params: IFlightQueryParams) {
		return await client
			.get<IFlightCity[]>(`${FLIGHT_URL}/city`, {
				params,
			})
			.then(res => res.data)
	}

	async getTopFlights(lan: string) {
		return await client
			.get<FlightData[]>(`${FLIGHT_URL}/article/topFlight?lan=${lan}`)
			.then(res => res.data)
	}

	async getSpecialDeals(lan: string) {
		return await client.get<ISpecialDealsDataType[]>(
			`${FLIGHT_URL}/article/specialDeal?lan=${lan}`
		)
	}

	async getFlightsSearch(params: IFlightQueryParams) {
		return await client.get<ISearchFlight>(`${FLIGHT_URL}/trip/global`, {
			params,
		})
	}

	async getSeatDetails(id: string) {
		return await client
			.get<ISeatDetails>(`${FLIGHT_URL}/trip/seatDetails/${id}`)
			.then(res => res.data)
	}

	async addTicketBook(accessToken: string, formData: ITicketBook) {
		try {
			const response = await client.post(
				`${FLIGHT_URL}/ticket/book`,
				JSON.stringify(formData),
				{
					headers: {
						Authorization: accessToken,
					},
				}
			)

			return response.data
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.response?.data.status)
			}
		}
	}
}

const flightService = new FlightService()

export default flightService
