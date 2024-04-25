import { Slash } from 'lucide-react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '../../ui/breadcrumb'

export default function FlightsBreadcrumbs() {
	return (
		<>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<Slash />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbLink href='/flights'>Flights</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator>
						<Slash />
					</BreadcrumbSeparator>
					<BreadcrumbItem>
						<BreadcrumbPage>Ticket Booking</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</>
	)
}
