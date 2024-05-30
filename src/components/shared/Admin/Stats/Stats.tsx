import { Eye, Luggage, ShoppingCart, Users } from 'lucide-react'
import CardDataStats from './CardDataStats'

interface StatsProps {
	totalUser?: number
}

export function Stats({ totalUser = 0 }: StatsProps) {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4'>
			<CardDataStats title='Total views' total='$3.456K' rate='83%' levelUp>
				<Eye />
			</CardDataStats>
			<CardDataStats title='Total Profit' total='$15,2K' rate='43.5%' levelUp>
				<ShoppingCart />
			</CardDataStats>
			<CardDataStats title='Total Buy' total='50' rate='29%' levelUp>
				<Luggage />
			</CardDataStats>
			<CardDataStats
				title='Total Users'
				total={`${totalUser}`}
				rate='100%'
				levelUp
			>
				<Users />
			</CardDataStats>
		</div>
	)
}
