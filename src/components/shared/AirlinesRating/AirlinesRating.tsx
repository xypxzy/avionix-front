'use client'

import styles from '@/src/components/common/Footer/Footer.module.css'
import ClientService from '@/src/services/api/client-host'
import { IAirlineRating } from '@/src/shared/types/discovery'
import { LinkEnum } from '@/src/shared/utils/route'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { AirlinesRatingSkeleton } from './AirlinesRating.skeleton'

const AirlinesRating = () => {
	const { data: airlineRatings, isLoading } = useQuery<IAirlineRating[]>({
		queryKey: ['airline-ratings'],
		queryFn: () => ClientService.getAirlineRatingList(),
	})

	const t = useTranslations('AirlineRating')

	const addMedalClass = (index: number) => {
		if (index === 0) return 'bg-gold'
		if (index === 1) return 'bg-silver'
		if (index === 2) return 'bg-bronze'
		return ''
	}

	if (isLoading) {
		return <AirlinesRatingSkeleton />
	}

	return (
		<section
			className={`${styles.full_bleed} flex flex-col items-center justify-center gap-12 bg-dark_blue p-4 sm:py-8 md:py-16 lg:px-4 lg:py-[110px]`}
		>
			<h3
				className={`mb-10 text-base font-medium text-background md:text-lg lg:text-xl `}
			>
				{t('title')}
			</h3>

			<div className={`grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3`}>
				{airlineRatings &&
					airlineRatings.map((item: IAirlineRating, index: number) => (
						<Link
							href={'#'}
							className={`relative flex max-h-[250px] w-full max-w-[350px] flex-col items-center justify-center gap-5 rounded-sm bg-background px-8 py-6 2xl:w-[350px]`}
							key={index}
						>
							<Image
								className={`h-[200px] max-w-[140px] object-contain object-center`}
								src={item.imageUrl}
								alt={item.name}
								width={200}
								height={250}
							/>
							<h5
								className={`mt-auto text-nowrap text-center text-caption font-semibold md:text-sm lg:text-base`}
							>
								{item.name}
							</h5>
							<div
								className={`rounded-[4px] p-2 text-xs font-medium md:text-sm lg:text-base ${addMedalClass(index)} border`}
							>
								{item.rating}/10
							</div>
						</Link>
					))}
			</div>
			<Link
				href={LinkEnum.Flights}
				className='ml-auto text-background underline hover:text-muted-foreground'
			>
				{t('link')}
			</Link>
		</section>
	)
}

export default AirlinesRating
