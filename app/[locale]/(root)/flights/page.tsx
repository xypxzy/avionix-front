import Hero from '@/src/components/common/Hero/Hero'
import {Filter} from "@/src/components/shared/FilterComponents/Filter";
import {BestPrices} from "@/src/components/shared/FlightsComponents/BestPrices/BestPrices";


export default function Flights() {
	return (
		<div>
			<Hero title='Discover Flights' type='flights' />
			<div className={`mt-5 flex flex-wrap-reverse lg:flex-nowrap`}>
				<div className={`hidden w-full max-w-[390px] md:block`}>
					<Filter/>
				</div>
				<div className={`w-full max-w-[886px]`}>
					<BestPrices/>
				</div>
				<div className={`mb-5 h-[200px] w-full px-1 lg:mb-0 lg:max-h-screen lg:max-w-[310px]`}>
					<div className={`size-full rounded-xl bg-slate-500`}>
						reclama
					</div>
				</div>
			</div>
		</div>
	)
}
