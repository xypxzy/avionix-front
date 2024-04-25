import FlightsBreadcrumbs from '@/src/components/shared/FlightsBreadcrumbs/FlightsBreadcrumbs'
import { FlightsDetails } from '@/src/components/shared/FlightsDetails/FlightsDetails'

export default function FlightDetailsPage({
	params,
}: {
	params: { id: string }
}) {
	return (
		<div className='min-h-svh'>
			<FlightsBreadcrumbs />
			<FlightsDetails id={params.id} />
		</div>
	)
}
