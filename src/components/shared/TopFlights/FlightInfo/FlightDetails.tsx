import { Segments } from '@/src/shared/types/topFlightsTypes'
import { useTranslations } from 'next-intl'
import React from 'react'

interface FlightDetailsProps {
	segment: Segments
	airline: string
	duration: string
}

export const FlightDetails: React.FC<FlightDetailsProps> = ({
	segment,
	airline,
	duration,
}) => {
	const t = useTranslations('top-flights')

	return (
		<div className={`w-full max-w-[430px]`}>
			<div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
				<p className={`text-sm font-medium text-primary`}>{t('departure')}</p>
				<p className={`font-bold md:mx-auto`}>{duration}</p>
				<p className={`text-sm font-medium text-primary md:ml-auto`}>
					{t('arrival')}
				</p>
			</div>
			<div className={`font-medium text-primary`}>
				{'>------------------------------------------>'}
			</div>
			<div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
				<p className={`text-sm font-medium text-primary`}>
					{segment.takeoffIata}
				</p>
				<p className={`text-xs font-bold md:mx-auto`}>{airline}</p>
				<p className={`text-sm font-medium text-primary md:ml-auto`}>
					{segment.arrivalIata}
				</p>
			</div>
		</div>
	)
}
