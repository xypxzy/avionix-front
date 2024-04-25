import { client } from '@/src/services/axios'
import { IAirlineRating } from '@/src/shared/types/discovery'
import {ICreateCommentType} from "@/src/shared/types/createCommentType";

const CLIENT_URL = 'client/api'


class ClientService {
	async getAirlineRatingList() {
		return await client
			.get<IAirlineRating[]>(`${CLIENT_URL}/airline/rating`)
			.then(res => res.data)
	}

    async getCustomersComments(lan: string) {
        return await client
            .get(`${CLIENT_URL}/comment?lan=${lan}`)
			.then(res => res.data)
    }

	async createComment(data:ICreateCommentType, token:string) {
		return await client.post(`${CLIENT_URL}/comment`, data, {headers:{Authorization:token}})
	}
}

const clientService = new ClientService()
export default clientService
