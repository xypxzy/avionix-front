'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils/classnames'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ArrowRightLeft, CalendarIcon, MoveRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import styles from './FlightForm.module.css'

const flightFormSchema = z.object({
	departure: z.string().min(2).max(50).optional(),
	destination: z.string().min(2).max(50).optional(),
	tripType: z.enum(['one way', 'two way']).optional(),
	date: z
		.object({
			from: z.date().optional(),
			to: z.date().optional(),
		})
		.optional(),
	passengers: z.string().min(1).max(10).optional(),
})

export default function FlightForm() {
	const form = useForm<z.infer<typeof flightFormSchema>>({
		resolver: zodResolver(flightFormSchema),
		defaultValues: {
			departure: '',
			destination: '',
			tripType: 'one way',
			date: {
				from: new Date(),
				to: undefined,
			},
			passengers: '1',
		},
	})
	const searchParams = useSearchParams()
	const router = useRouter()

	function setValidReturnDate() {
		form.setValue('date.to', form.watch('date.from'))
		return form.watch('date.from')
	}

	// TODO:доделать переключения значений, проблема в не пере-рендеринг.
	function onSwitchCities() {
		const temp = form.watch('departure')
		form.setValue('departure', form.watch('destination'))
		form.setValue('destination', temp)

		form.reset(form.getValues())
	}

	function onSubmit(values: z.infer<typeof flightFormSchema>) {
		const queryParams = new URLSearchParams(searchParams.toString())
		if (values.departure) {
			queryParams.set('departure', values.departure)
		}
		if (values.destination) {
			queryParams.set('destination', values.destination)
		}
		if (values.tripType) {
			queryParams.set('tripType', values.tripType)
		}
		if (values.date && values.date.from) {
			queryParams.set('dateFrom', values.date.from.toISOString())
		}
		if (values.date && values.date.to) {
			queryParams.set('dateTo', values.date.to.toISOString())
		}
		if (values.passengers) {
			queryParams.set('passengers', values.passengers)
		}

		router.push(`/flights/?${queryParams.toString()}`)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={styles.form__container}
			>
				<FormField
					control={form.control}
					name='departure'
					render={({ field }) => (
						<FormItem
							className={cn(
								styles.form__from,
								'rounded-sm bg-secondary dark:bg-background px-5 py-4 text-center'
							)}
						>
							<FormLabel className='block rounded-md bg-primary py-2 text-primary-foreground'>
								From
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className='h-8 w-full truncate border-none bg-inherit'>
										<SelectValue placeholder='Select a city' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectItem value='almaty'>Almaty</SelectItem>
										<SelectItem value='bishkek'>Bishkek</SelectItem>
										<SelectItem value='moscow'>Moscow</SelectItem>
										<SelectItem value='pekin'>Pekin</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>

				<div
					className={cn(
						styles.form__change_btn,
						'flex justify-center items-center'
					)}
				>
					<Button
						type='button'
						variant='ghost'
						onClick={onSwitchCities}
						className='hover:bg-primary hover:text-primary-foreground'
					>
						<ArrowRightLeft />
					</Button>
				</div>

				<FormField
					control={form.control}
					name='destination'
					render={({ field }) => (
						<FormItem
							className={cn(
								styles.form__to,
								'rounded-sm bg-secondary dark:bg-background px-5 py-4 text-center'
							)}
						>
							<FormLabel className='block rounded-md bg-primary py-2 text-primary-foreground'>
								To
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className='h-8 w-full border-none bg-inherit'>
										<SelectValue placeholder='Select a city' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectItem value='almaty'>Almaty</SelectItem>
										<SelectItem value='bishkek'>Bishkek</SelectItem>
										<SelectItem value='moscow'>Moscow</SelectItem>
										<SelectItem value='pekin'>Pekin</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='tripType'
					render={({ field }) => (
						<FormItem
							className={cn(
								styles.form__trip,
								'rounded-sm bg-secondary dark:bg-background px-5 py-4 text-center'
							)}
						>
							<FormLabel className='block rounded-md bg-primary py-2 text-primary-foreground'>
								Trip
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className='h-8 w-full border-none bg-inherit 2xl:w-[110px]'>
										<SelectValue placeholder='Select a type' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectItem value='one way'>One way</SelectItem>
										<SelectItem value='two way'>Two way</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='date.from'
					render={({ field }) => (
						<FormItem
							className={cn(
								styles.form__departure,
								'rounded-sm bg-secondary dark:bg-background px-5 py-4 text-center text-primary-foreground'
							)}
						>
							<FormLabel className='block rounded-md bg-primary py-2'>
								Departure
							</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											id='date'
											variant={'outline'}
											className={cn(
												'w-full 2xl:w-[160px] pl-3 text-left font-normal h-8 border-none bg-inherit hover:bg-inherit hover:text-muted-foreground',
												!field.value && 'text-muted-foreground'
											)}
										>
											{field.value ? (
												format(field.value, 'dd MMM yyyy')
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className='ml-auto size-4 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className='w-auto p-0' align='center'>
									<Calendar
										initialFocus
										mode='single'
										selected={field.value}
										disabled={date => date < new Date()}
										onSelect={field.onChange}
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='date.to'
					render={({ field }) => (
						<FormItem
							className={cn(
								styles.form__return,
								'rounded-sm bg-secondary dark:bg-background text-primary-foreground px-5 py-4 text-center'
							)}
						>
							<FormLabel className='block rounded-md bg-primary py-2'>
								Return
							</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											id='date'
											variant={'outline'}
											className={cn(
												'w-full 2xl:w-[160px] pl-3 text-left font-normal h-8 border-none bg-inherit hover:bg-inherit hover:text-muted-foreground',
												!field.value && 'text-muted-foreground'
											)}
										>
											{field.value ? (
												format(field.value, 'dd MMM yyyy')
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className='ml-auto size-4 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className='w-auto p-0' align='center'>
									<Calendar
										initialFocus
										mode='single'
										selected={
											form.watch('date.from')! > field.value!
												? setValidReturnDate()
												: field.value
										}
										disabled={date => date < form.watch('date.from')!}
										onSelect={field.onChange}
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='passengers'
					render={({ field }) => (
						<FormItem
							className={cn(
								styles.form__passengers,
								'rounded-sm bg-secondary dark:bg-background px-5 py-4 text-center'
							)}
						>
							<FormLabel className='block rounded-md bg-primary py-2 text-primary-foreground'>
								Passengers
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className='h-8 w-full border-none bg-inherit 2xl:w-[120px]'>
										<SelectValue placeholder='Select a type' />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectItem value={'1'}>1 adult</SelectItem>
										<SelectItem value={'2'}>2 adults</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					variant='secondary'
					className={cn(
						styles.form__button,
						'h-[6.5rem] px-8 py-2 dark:bg-background'
					)}
				>
					Discover
					<MoveRight className='ml-4' />
				</Button>
			</form>
		</Form>
	)
}
