import Hero from '@/src/components/common/Hero/Hero'
import {Filter} from "@/src/components/shared/FilterComponents/Filter";


export default function Flights() {
	return (
		<div>
			<Hero title='Discover Flights' type='flights' />
			<div className={`flex mt-20`}>
				<div className={`w-[30%] h-[100vh]`}>
					<Filter/>
				</div>
				<div className={`w-[50%] h-[100vh] bg-blue-600`}>Main</div>
				<div className={`w-[20%] h-[100vh] bg-yellow-500`}>Reclama</div>
			</div>
		</div>
	)
}
