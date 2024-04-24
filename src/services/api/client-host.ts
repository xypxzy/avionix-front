import { client } from '@/src/services/axios'
import { IAirlineRating } from '@/src/shared/types/discovery'

const CLIENT_URL = 'client/api'

class ClientService {
	async getAirlineRatingList() {
		return await client
			.get<IAirlineRating[]>(`${CLIENT_URL}/airline/rating`)
			.then(res => res.data)
	}
}

const clientService = new ClientService()
export default clientService
