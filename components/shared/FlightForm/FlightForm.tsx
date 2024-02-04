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
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { ArrowRightLeft, CalendarIcon, MoveRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const flightFormSchema = z.object({
	departure: z.string().min(2).max(50),
	destination: z.string().min(2).max(50),
	tripType: z.enum(['one way', 'two way']),
	date: z.object({
		from: z.date(),
		to: z.date(),
	}),
	passengers: z.string().min(1).max(10),
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

	// TODO:доделать переключения значений, проблема в не перерендеринге.
	async function onSwitchCities() {
		const departureValue = form.getValues().departure
		const destinationValue = form.getValues().destination

		await form.setValue('departure', destinationValue)
		await form.setValue('destination', departureValue)
		form.trigger()
	}

	function onSubmit(values: z.infer<typeof flightFormSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-wrap items-center justify-between gap-5 lg:items-start lg:justify-center'
			>
				<div className='flex flex-col items-center gap-4 sm:flex-row'>
					<FormField
						control={form.control}
						name='departure'
						render={({ field }) => (
							<FormItem className='rounded-sm bg-secondary px-5 py-4 text-center'>
								<FormLabel className='block rounded-md bg-primary py-2'>
									From
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className='h-8 w-full truncate border-none  bg-inherit text-background md:max-w-[140px]'>
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

					<Button
						type='button'
						variant='ghost'
						onClick={onSwitchCities}
						className='hover:bg-primary'
					>
						<ArrowRightLeft />
					</Button>

					<FormField
						control={form.control}
						name='destination'
						render={({ field }) => (
							<FormItem className='rounded-sm bg-secondary px-5 py-4 text-center'>
								<FormLabel className='block  rounded-md bg-primary py-2'>
									To
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className='h-8 w-full border-none bg-inherit  text-background md:w-[140px]'>
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
				</div>

				<FormField
					control={form.control}
					name='tripType'
					render={({ field }) => (
						<FormItem className='rounded-sm bg-secondary px-5 py-4 text-center'>
							<FormLabel className='block rounded-md bg-primary py-2'>
								Trip
							</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className='h-8 w-full border-none bg-inherit text-background md:w-[110px]'>
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
						<FormItem className='rounded-sm bg-secondary px-5 py-4 text-center'>
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
												'w-full md:w-[160px] pl-3 text-left font-normal h-8 border-none bg-inherit text-background hover:bg-inherit hover:text-background',
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
						<FormItem className='rounded-sm bg-secondary px-5 py-4 text-center'>
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
												'w-full md:w-[160px] pl-3 text-left font-normal h-8 border-none bg-inherit text-background hover:bg-inherit hover:text-background',
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
					name='passengers'
					render={({ field }) => (
						<FormItem className='rounded-sm bg-secondary px-5 py-4 text-center'>
							<FormLabel className='block rounded-md bg-primary py-2'>
								Passengers
							</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value.toString()}
							>
								<FormControl>
									<SelectTrigger className='h-8 w-full border-none bg-inherit text-background md:w-[120px]'>
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
					className='h-[6.5rem] px-8 py-2'
				>
					Discover
					<MoveRight className='ml-4' />
				</Button>
			</form>
		</Form>
	)
}
