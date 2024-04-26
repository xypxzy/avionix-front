import { ITrip } from '../types/topFlightsTypes'

export const determineTicketType = (type: string, data: ITrip) => {
	return type === 'departure' ? data?.departureTrip : data?.returnTrip
}
