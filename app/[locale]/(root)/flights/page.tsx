import Hero from '@/src/components/common/Hero/Hero'
import {Filter} from "@/src/components/shared/FilterComponents/Filter";


export default function Flights() {
	return (
		<div>
			<Hero title='Discover Flights' type='flights' />
			<div className={`flex mt-20`}>
				<div className={`w-[30%]`}>
					<Filter/>
				</div>
				<div className={`w-[50%] bg-red-400`}>Main</div>
				<div className={`w-[20%] bg-slate-500`}>Reclama</div>
			</div>
		</div>
	)
}
