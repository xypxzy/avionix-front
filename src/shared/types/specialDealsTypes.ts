import { IFlight } from './topFlightsTypes'

export interface ISpecialDealsDataType {
	imageUrl: string
	description: string
	discount?: string
	flight: IFlight
}

export interface ISpecialDealsProps {
	items: ISpecialDealsDataType[]
	direction?: 'left' | 'right'
	speed?: 'fast' | 'normal' | 'slow'
	pauseOnHover?: boolean
	className?: string
}
