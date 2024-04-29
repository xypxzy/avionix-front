'use client'
import { useQuery } from '@tanstack/react-query'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

import FlightService from '@/src/services/api/flight-host'
import { ISpecialDealsDataType } from '@/src/shared/types/specialDealsTypes'
import { LinkEnum } from '@/src/shared/utils/route'
import { InfiniteMovingCards } from '../../ui/infinite-moving-cards'
import { SpecialDealsSkeleton } from './SpecialDeals.skeleton'

export function SpecialDeals() {
	const locale = useLocale()
	const { data: specialDeals, isLoading } = useQuery<ISpecialDealsDataType[]>({
		queryKey: ['special-deals'],
		queryFn: () => FlightService.getTopFlights(locale),
	})
	const t = useTranslations('SpecialDeals')

	if (isLoading) {
		return <SpecialDealsSkeleton />
	}

	return (
		<section className='flex size-full h-[350px] flex-col items-center justify-start rounded antialiased sm:h-[550px] lg:h-[650px]'>
			<div className='mt-5 flex w-full flex-col items-start justify-between sm:mt-10 sm:flex-row sm:items-center'>
				<h3 className='text-base font-bold md:text-lg lg:text-xl'>
					{t('title')}
				</h3>
				<Link
					href={LinkEnum.Flights}
					className='p-0 text-foreground underline hover:text-muted-foreground'
				>
					{t('link')}
				</Link>
			</div>
			{specialDeals && (
				<div className={`absolute top-[44.5%] size-full max-h-[450px]`}>
					<InfiniteMovingCards
						items={specialDeals}
						direction='left'
						speed='fast'
					/>
				</div>
			)}
		</section>
	)
}
