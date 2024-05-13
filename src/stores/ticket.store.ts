import { create } from 'zustand'
import { IFlight } from '../shared/types/topFlightsTypes'
import { IUser } from '../shared/types/user'

export interface IFlightResponse {
	['qr-code']: string
	ticket: {
		id: string
		seat: string
		status: string
		flights: IFlight
		customer: IUser
	}
}

type FlightStore = {
	flightResult: IFlightResponse | null
	setFlightResult: (flightResult: IFlightResponse) => void
}

export const useFlightStore = create<FlightStore>(set => ({
	flightResult: null,
	setFlightResult: flightResult => set({ flightResult }),
}))
