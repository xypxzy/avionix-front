import { client } from '@/src/services/axios'
import { ISpecialDealsDataType } from '@/src/shared/types/specialDealsTypes'
import { FlightData } from '@/src/shared/types/topFlightsTypes'

const FLIGHT_URL = 'flight/api'

class FlightService {
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
}

const flightService = new FlightService()

export default flightService
