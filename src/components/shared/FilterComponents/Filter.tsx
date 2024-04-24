import { Baggage } from './Baggage/Baggage'
import { Duration } from './Time/FlyDuration/Duration'
import { Time } from './Time/Time'
import { Transplants } from './Transplants/Transplants'
import { Transporters } from './Transporters/Transporters'

export const Filter = () => {
	return (
		<>
			<Baggage />
			<Transplants />
			<Transporters />
			<Time />
			<Duration />
		</>
	)
}
