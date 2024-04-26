import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { formatDate } from 'date-fns'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../ui/button'

export default function FlightsCard({ flight }: { flight: IFlight }) {
	const t = useTranslations('top-flights')

	return (
		<div className='flex gap-8'>
			<div className='w-9/12'>
				<div className='flex flex-col gap-5'>
					{flight.departureTrip.segments.map((segment, index) => (
						<div
							key={index}
							className={
								'flex w-full flex-col justify-between gap-10 md:flex-row'
							}
						>
							<div className={`flex flex-col`}>
								<p>{flight.from}</p>
								<p className={`mt-auto text-xs`}>
									{formatDate(new Date(segment.arrivalAt), 'hh:mm')}
								</p>
							</div>
							<div className={`w-full max-w-[430px]`}>
								<div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
									<p className={`text-sm font-medium text-primary`}>
										{t('departure')}
									</p>
									<Image
										src={flight.airlineImageUrl}
										alt={'airline logo'}
										width={60}
										height={100}
										className='mx-auto'
									/>
									<p className={`text-sm font-medium text-primary md:ml-auto`}>
										{t('arrival')}
									</p>
								</div>
								<div className={`font-medium text-primary`}>
									{'>------------------------------------------>'}
								</div>
								<div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
									<p className={`text-sm font-medium text-primary`}>
										{segment.takeoffIata}
									</p>
									<p className={`text-xs font-bold md:mx-auto`}>
										{flight.airline}
									</p>
									<p className={`text-sm font-medium text-primary md:ml-auto`}>
										{segment.arrivalIata}
									</p>
								</div>
							</div>
							<div className={`flex flex-col`}>
								<p>{flight.to}</p>
								<p className={`mt-auto text-xs`}>
									{formatDate(new Date(segment.takeoffAt), 'hh:mm')}
								</p>
							</div>
						</div>
					))}
				</div>
				{!flight.oneWay && (
					<>
						<div className={`my-4 h-[1px] w-full bg-dark_blue`}></div>
						<div className='flex flex-col gap-5'>
							{flight.returnTrip.segments.map((segment, index) => (
								<div
									key={index}
									className={
										'flex w-full flex-col justify-between gap-10 md:flex-row'
									}
								>
									<div className={`flex flex-col`}>
										<p>{flight.from}</p>
										<p className={`mt-auto text-xs`}>
											{formatDate(new Date(segment.takeoffAt), 'hh:mm')}
										</p>
									</div>
									<div className={`w-full max-w-[430px]`}>
										<div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
											<p className={`text-sm font-medium text-primary`}>
												{t('departure')}
											</p>
											<Image
												src={flight.airlineImageUrl}
												alt={'airline logo'}
												width={60}
												height={100}
												className='mx-auto'
											/>
											<p
												className={`text-sm font-medium text-primary md:ml-auto`}
											>
												{t('arrival')}
											</p>
										</div>
										<div className={`font-medium text-primary`}>
											{'>------------------------------------------>'}
										</div>
										<div className={`grid grid-cols-1 gap-1 md:grid-cols-3`}>
											<p className={`text-sm font-medium text-primary`}>
												{segment.takeoffIata}
											</p>
											<p className={`text-xs font-bold md:mx-auto`}>
												{flight.airline}
											</p>
											<p
												className={`text-sm font-medium text-primary md:ml-auto`}
											>
												{segment.arrivalIata}
											</p>
										</div>
									</div>
									<div className={`flex flex-col`}>
										<p>{flight.to}</p>
										<p className={`mt-auto text-xs`}>
											{formatDate(new Date(segment.arrivalAt), 'hh:mm')}
										</p>
									</div>
								</div>
							))}
						</div>
					</>
				)}
			</div>
			<div className='relative flex w-3/12 items-center justify-center'>
				<span className='text-lg'>
					{flight.tariff.price} {flight.currency}
				</span>
				<Link href={`/flights/${flight.id}`} className='absolute bottom-5'>
					<Button variant='default'>Забронировать</Button>
				</Link>
			</div>
		</div>
	)
}
