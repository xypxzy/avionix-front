import { TabsContent } from '@/src/components/ui/tabs'
import { ITicketBook } from '@/src/shared/types/schemas/ticketBook'
import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { UseFormReturn } from 'react-hook-form'
import { FlightsBaggage } from '../FlightsDetailsTabContent/FlightsBaggage'
import { FlightsInformation } from '../FlightsDetailsTabContent/FlightsInformation'
import { FlightsSeating } from '../FlightsDetailsTabContent/FlightsSeating'
import { FlightsSummary } from '../FlightsDetailsTabContent/FlightsSummary'

export const RenderFormContent = (
	currentStep: number,
	flight: IFlight,
	form: UseFormReturn<ITicketBook>
) => {
	switch (currentStep) {
		case 0:
			return (
				<TabsContent value='details'>
					<FlightsInformation flight={flight} />
				</TabsContent>
			)
		case 1:
			return (
				<TabsContent value='seating'>
					<FlightsSeating flight={flight} form={form} />
				</TabsContent>
			)
		case 2:
			return (
				<TabsContent value='baggage'>
					<FlightsBaggage flight={flight} form={form} />
				</TabsContent>
			)
		case 3:
			return (
				<TabsContent value='summary'>
					<FlightsSummary />
				</TabsContent>
			)
		default:
			return null
	}
}
