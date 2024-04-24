import Hero from '@/src/components/common/Hero/Hero'
import { Filter } from '@/src/components/shared/FilterComponents/Filter'
import { BestPrices } from '@/src/components/shared/FlightsComponents/BestPrices/BestPrices'
import { Skeleton } from '@/src/components/ui/skeleton'

export default function Flights() {
	return (
		<div>
			<Hero title='Discover Flights' type='flights' />
			<div className={`my-16 flex flex-wrap-reverse gap-6 lg:flex-nowrap`}>
				<div className={`hidden w-3/12 md:block`}>
					<Filter />
				</div>
				<div className={'flex-1'}>
					<BestPrices />
				</div>
				<Skeleton className='h-[450px] w-2/12 rounded-xl bg-slate-400' />
			</div>
		</div>
	)
}
