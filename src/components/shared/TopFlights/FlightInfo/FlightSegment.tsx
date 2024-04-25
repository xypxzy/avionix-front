import { customGetFullDate } from '@/src/shared/utils/timeConverter'
import React from 'react'

interface FlightSegmentProps {
	segment: string
	flight: string
	locale: string
}

export const FlightSegment: React.FC<FlightSegmentProps> = ({
	flight,
	segment,
	locale,
}) => {
	return (
		<div className={`flex flex-col`}>
			<p>{flight}</p>
			<p className={`mt-auto text-xs`}>{customGetFullDate(segment, locale)}</p>
		</div>
	)
}
