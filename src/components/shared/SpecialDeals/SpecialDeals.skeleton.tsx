import { Skeleton } from '../../ui/skeleton'

export function SpecialDealsSkeleton() {
	return (
		<section className='flex size-full h-[550px] flex-col items-center justify-start'>
			<div className='mt-12 flex w-full items-end justify-between'>
				<Skeleton className='h-8 w-40' />
				<Skeleton className='h-4 w-24' />
			</div>
			<div className='mt-5 flex w-full justify-evenly'>
				<Skeleton className={`h-[350px] w-[450px]`} />
				<Skeleton className={`h-[350px] w-[450px]`} />
				<Skeleton className={`h-[350px] w-[450px]`} />
			</div>
		</section>
	)
}
