import { client } from "@/src/services/axios";

const FLIGHT_URL = 'flight/api';

class FlightService {
    getTopFlights(lan: string) {
        return client.get(`${FLIGHT_URL}/article/topFlight?lan=${lan}`);
    }
}

const flightService = new FlightService();

export default flightService;
