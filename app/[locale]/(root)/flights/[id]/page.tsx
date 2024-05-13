import FlightsBreadcrumbs from '@/src/components/shared/FlightsBreadcrumbs/FlightsBreadcrumbs'
import { FlightsDetails } from '@/src/components/shared/FlightsDetails/FlightsDetails'

export default function FlightDetailsPage({
	params,
}: {
	params: { id: string }
}) {
	return (
		<div className='min-h-dvh'>
			<FlightsBreadcrumbs />
			<FlightsDetails id={params.id} />
		</div>
	)
}
