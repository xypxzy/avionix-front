import styles from '@/src/components/common/Footer/Footer.module.css'
import { Skeleton } from '../../ui/skeleton'

export function AirlinesRatingSkeleton() {
	return (
		<section
			className={`${styles.full_bleed} flex h-screen flex-col items-center justify-center gap-12 bg-dark_blue`}
		>
			<Skeleton className='h-8 w-40' />

			<div className={`grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3`}>
				<div
					className={`flex h-[250px] w-[350px] flex-col items-center justify-center gap-5 px-8 py-6 `}
				>
					<Skeleton className={`h-[200px] w-[140px]`} />
					<Skeleton className='h-4 w-40' />
					<Skeleton className='h-4 w-64' />
				</div>
				<div
					className={`flex h-[250px] w-[350px] flex-col items-center justify-center gap-5 px-8 py-6 `}
				>
					<Skeleton className={`h-[200px] w-[140px]`} />
					<Skeleton className='h-4 w-40' />
					<Skeleton className='h-4 w-64' />
				</div>
				<div
					className={`flex h-[250px] w-[350px] flex-col items-center justify-center gap-5 px-8 py-6 `}
				>
					<Skeleton className={`h-[200px] w-[140px]`} />
					<Skeleton className='h-4 w-40' />
					<Skeleton className='h-4 w-64' />
				</div>
				<div
					className={`flex h-[250px] w-[350px] flex-col items-center justify-center gap-5 px-8 py-6 `}
				>
					<Skeleton className={`h-[200px] w-[140px]`} />
					<Skeleton className='h-4 w-40' />
					<Skeleton className='h-4 w-64' />
				</div>
				<div
					className={`flex h-[250px] w-[350px] flex-col items-center justify-center gap-5 px-8 py-6 `}
				>
					<Skeleton className={`h-[200px] w-[140px]`} />
					<Skeleton className='h-4 w-40' />
					<Skeleton className='h-4 w-64' />
				</div>
				<div
					className={`flex h-[250px] w-[350px] flex-col items-center justify-center gap-5 px-8 py-6 `}
				>
					<Skeleton className={`h-[200px] w-[140px]`} />
					<Skeleton className='h-4 w-40' />
					<Skeleton className='h-4 w-64' />
				</div>
			</div>
			<Skeleton className='mb-4 h-4 w-36' />
		</section>
	)
}
