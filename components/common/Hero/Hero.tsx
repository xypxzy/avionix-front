import EarthCanvas from '@/components/canvas/Earth/Earth'
import FlightForm from '@/components/shared/FlightForm/FlightForm'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Castle, Plane } from 'lucide-react'
import React, { Suspense, useCallback } from 'react'

type RenderType = 'default' | 'flights' | 'hotels'

interface HeroProps {
	title: string
	preTitle?: string
	type?: RenderType
	icon?: React.JSX.Element
}

function Hero(props: HeroProps) {
	const { title, preTitle, type = 'default', icon } = props

	const renderContent = useCallback(() => {
		const components = {
			default: (
				<Tabs defaultValue='flights' className='w-full'>
					<TabsList className='h-12 sm:h-14'>
						<TabsTrigger value='flights'>
							<Plane className='size-5 sm:size-7' />
							<p className='text-xs sm:text-sm'>Flights</p>
						</TabsTrigger>
						<TabsTrigger value='hotels' disabled>
							<Castle className='size-5 sm:size-7' />
							<p className='text-xs sm:text-sm'>Hotels</p>
						</TabsTrigger>
					</TabsList>
					<TabsContent value='flights'>
						<Suspense fallback={<div>Is Loading...</div>}>
							<FlightForm />
						</Suspense>
					</TabsContent>
					<TabsContent value='hotels'>Change your password here.</TabsContent>
				</Tabs>
			),
			flights: (
				<Suspense fallback={<div>Is Loading...</div>}>
					<FlightForm />
				</Suspense>
			),
			hotels: <div>hotels</div>,
		}

		return components[type] || null
	}, [type])

	return (
		<section
			className='relative space-y-2 rounded-md border-2 bg-background_hero p-8 before:absolute 
			before:inset-0 before:-left-6 before:top-[10%] before:z-[-2] before:h-[80%] before:w-[calc(100%+3rem)] before:rounded-sm before:border-2 before:border-secondary before:bg-primary after:absolute after:inset-0
			after:-left-3 after:top-[5%] after:z-[-1] after:h-[90%] after:w-[calc(100%+1.5rem)] after:rounded-sm after:border-2 after:border-secondary-foreground after:bg-secondary dark:before:border-foreground lg:space-y-8'
		>
			<div className='flex items-center justify-between'>
				<div className='space-y-2 font-light uppercase lg:space-y-4'>
					{preTitle && (
						<h2 className='text-lg sm:text-xl xl:text-2xl'>{preTitle}</h2>
					)}
					<h1 className='text-xl leading-10 sm:text-2xl xl:text-3xl'>
						{title}
					</h1>
				</div>
				{icon && <picture>{icon}</picture>}
				{type === 'default' && <EarthCanvas />}
			</div>
			{renderContent()}
		</section>
	)
}

export default Hero
