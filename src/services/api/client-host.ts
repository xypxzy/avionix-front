import {client} from "@/src/services/axios";

const CLIENT_URL = 'client/api'

class Client_Service {

    getAirlineRatingList(){
        return client.get(`${CLIENT_URL}/airline/rating`)
    }

    getCustomersCommnets(lan:string) {
        return client.get(`${CLIENT_URL}/comment?lan=${lan}`)
    }

}

export default new Client_Service()
