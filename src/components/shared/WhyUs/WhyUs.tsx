'use client'
import { Progress } from '@/src/components/ui/progress'
import DiscoveryService from '@/src/services/api/discovery'
import { IWhyUs } from '@/src/shared/types/discovery'
import { useQuery } from '@tanstack/react-query'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useLocale, useTranslations } from 'next-intl'
import React, { useCallback, useEffect } from 'react'
import Slides from './Slides/Slides'
import { DotButton, useDotButton } from './SlidesPagination'

const WhyUs: React.FC = () => {
	const t = useTranslations('WhyUs')
	const locale = useLocale()
	const [progressValue, setProgressValue] = React.useState(0)
	const { data: whyUsList, isLoading } = useQuery<IWhyUs[]>({
		queryKey: ['why-us-list'],
		queryFn: () => DiscoveryService.getWhyUsList(locale),
	})

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 3000 }),
	])
	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		// @ts-ignore
		const autoplay = emblaApi?.plugins()?.autoplay as Autoplay
		if (!autoplay) return
		const resetOrStop: () => void =
			autoplay.options?.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop

		resetOrStop()
	}, [])
	const { selectedIndex, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavButtonClick
	)

	useEffect(() => {
		const duration = 2999
		const totalTicks = 100
		const interval = duration / totalTicks
		setProgressValue(0)
		const timer = setInterval(() => {
			setProgressValue(prevValue => {
				if (prevValue < totalTicks) {
					return prevValue + 1
				} else {
					setProgressValue(0)
					clearInterval(timer)
					return prevValue
				}
			})
		}, interval)

		return () => clearInterval(timer)
	}, [selectedIndex])

	if (isLoading) {
		return (
			<div className={`w-full max-w-[480px] text-center text-lg md:text-2xl`}>
				{t('loading')}
			</div>
		)
	}

	return (
		<section className='border-y border-primary py-4 sm:py-10 md:py-20 lg:py-32'>
			<div className={`mx-auto`}>
				<div className={`mx-auto w-full px-10`}>
					<h3 className={`mb-2 text-sm font-[600] sm:text-xl md:mb-6`}>
						{t('title')}
					</h3>
					<div className='overflow-hidden' ref={emblaRef}>
						<div className={`flex touch-pan-y`}>
							{whyUsList?.map((item, index) => (
								<Slides key={index} index={index} data={item} />
							))}
						</div>
					</div>
					<div className='mx-auto mt-5 flex w-full max-w-[738px] items-center justify-center md:mt-10'>
						{whyUsList?.map((_, index: number) => (
							<DotButton
								key={index}
								onClick={() => onDotButtonClick(index)}
								className={`m-0 flex w-full max-w-[60px] cursor-pointer touch-manipulation appearance-none justify-between gap-3 border-0 p-0 decoration-0 after:flex after:h-[1px] after:w-6 after:items-center sm:max-w-[120px] md:max-w-[180px] lg:max-w-[230px]`}
							>
								<Progress
									value={index === selectedIndex ? progressValue : 0}
									className={`${index < selectedIndex && 'bg-foreground'}`}
								/>
							</DotButton>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyUs
