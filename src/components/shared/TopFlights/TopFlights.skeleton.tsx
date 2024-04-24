import { Skeleton } from '../../ui/skeleton'

export function TopFlightsSkeleton() {
	return (
		<div className='my-8'>
			<div className='flex items-end justify-between'>
				<Skeleton className='mb-4 h-8 w-64' />
				<Skeleton className='mb-4 h-4 w-36' />
			</div>
			<div className='flex flex-col gap-8 lg:flex-row'>
				<div className='flex h-[450px] w-[420px] flex-col justify-between py-2'>
					<Skeleton className='text-sm font-medium text-black md:text-base lg:text-lg' />
					<Skeleton className='h-[450px] w-[345px]' />
					<Skeleton className='mt-5 h-4 w-1/3' />
				</div>
				<div className='flex h-[450px] flex-1 flex-col gap-8'>
					<Skeleton className={`h-20 w-full`} />
					<Skeleton className={`h-20 w-full`} />
					<Skeleton className={`h-20 w-full`} />
					<Skeleton className={`h-20 w-full`} />
				</div>
			</div>
		</div>
	)
}
