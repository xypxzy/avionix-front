import {client} from "@/src/services/axios";

const CLIENT_URL = 'client/api'

class Client_Service {

    getAirlineRatingList(){
        return client.get(`${CLIENT_URL}/airline/rating`)
    }

}

export default new Client_Service()
