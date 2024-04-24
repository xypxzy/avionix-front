import { Tabs, TabsList, TabsTrigger } from '@/src/components/ui/tabs'

export const BestPrices = () => {
	return (
		<div className={`w-full rounded-xs border bg-white p-0`}>
			<Tabs defaultValue='account' className='size-full'>
				<TabsList
					className={`grid h-full grid-cols-1 items-center justify-center gap-4 border-none p-0 px-2 sm:grid-cols-2 md:grid-cols-3 lg:gap-2`}
				>
					<TabsTrigger
						className={`flex size-full flex-col rounded-none p-0 py-4 text-base font-normal data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none`}
						value='bestVariant'
					>
						<p className={`text-sm font-normal`}>Лучший вариант</p>
						<p className={`text-xs font-normal`}>70.000сом, 10ч.10м.</p>
					</TabsTrigger>
					<TabsTrigger
						className={`flex size-full flex-col rounded-none p-0 py-4 text-base font-normal data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none`}
						value='cheapestVariant'
					>
						<p className={`text-sm font-normal`}>Самый дешевый</p>
						<p className={`text-xs font-normal`}>70.000сом, 10ч.10м.</p>
					</TabsTrigger>
					<TabsTrigger
						className={`flex size-full flex-col rounded-none p-0 py-4 text-base font-normal data-[state=active]:border-b data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none`}
						value='fastestVariant'
					>
						<p className={`text-sm font-normal`}>Самые быстрый</p>
						<p className={`text-xs font-normal`}>70.000сом, 10ч.10м.</p>
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	)
}
