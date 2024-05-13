import { Checkbox } from '@/src/components/ui/checkbox'
import { Separator } from '@/src/components/ui/separator'
import { ITicketBook } from '@/src/shared/types/schemas/ticketBook'
import { IFlight } from '@/src/shared/types/topFlightsTypes'
import { useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

interface FlightsBaggageProps {
	flight: IFlight
	form: UseFormReturn<ITicketBook>
}

export function FlightsBaggage({ flight, form }: FlightsBaggageProps) {
	const [value, setValue] = useState(
		form.watch('checkedBaggageIncluded') || false
	)

	useEffect(() => {
		form.setValue('checkedBaggageIncluded', value)
	}, [form, value])

	return (
		<div className='mt-5 flex w-full gap-10'>
			<div className='w-3/5 rounded-md border-2'>
				<div className='flex flex-1 gap-4 rounded-t-sm bg-primary p-4 px-8 text-base font-normal text-primary-foreground transition-all sm:items-center'>
					Baggage
				</div>
				<div className='flex items-center justify-between p-4 px-8'>
					<span>Ручная кладь</span>
					<span>Бесплатно</span>
					<span>до 5кг</span>
					<Checkbox id='manual' disabled checked={true} />
				</div>
				<Separator className='w-full' />
				<div className='flex items-center justify-between p-4 px-8'>
					<span>Зарегистрированный багаж</span>
					<span>100 {flight.currency}</span>
					<span>до 20кг</span>
					<Checkbox
						checked={value}
						onCheckedChange={() => setValue(!value)}
						type='submit'
					/>
				</div>
			</div>
			<div className='h-fit w-2/5 rounded-md border-2'>
				<div className='flex flex-1 gap-4 rounded-t-sm bg-primary p-4 px-8 text-base font-normal text-primary-foreground transition-all sm:items-center'>
					Price Details
				</div>
				<div className='flex items-center justify-between p-4 px-8'>
					<span>1 x Пассажир</span>
					<span>
						{flight.currency} {flight.tariff.price}
					</span>
				</div>
				{value && (
					<div className='flex items-center justify-between p-4 px-8'>
						<span>Зарегистрированный багаж</span>
						<span>{flight.currency} 100</span>
					</div>
				)}
				<Separator className='w-full px-8' />
				<div className='flex items-center justify-between p-4 px-8'>
					<span>Итого</span>
					<span>
						{flight.currency}{' '}
						{value ? flight.tariff.price + 100 : flight.tariff.price}
					</span>
				</div>
			</div>
		</div>
	)
}
