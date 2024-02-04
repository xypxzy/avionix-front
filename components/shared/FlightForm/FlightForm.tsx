'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const flightFormSchema = z.object({
	from: z.string().min(2).max(50),
	destination: z.string().min(2).max(50),
	isRound: z.boolean(),
	departureDate: z.date(),
	returnDate: z.date(),
	passengers: z.number(),
})

export default function FlightForm() {
	const form = useForm<z.infer<typeof flightFormSchema>>({
		resolver: zodResolver(flightFormSchema),
		defaultValues: {
			from: '',
			destination: '',
			isRound: false,
			departureDate: new Date(),
			returnDate: new Date(),
			passengers: 0,
		},
	})

	function onSubmit(values: z.infer<typeof flightFormSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex items-center justify-between'
			>
				<FormField
					control={form.control}
					name='from'
					render={({ field }) => (
						<FormItem className='rounded-sm bg-secondary px-5 py-4 text-center'>
							<FormLabel className='block rounded-md bg-primary py-2'>
								From
							</FormLabel>
								<Select {...field} >
							<FormControl>
									<SelectTrigger className='h-8 w-[180px] border-none  bg-inherit text-background'>
										<SelectValue placeholder='Select a fruit' >
									</SelectTrigger>
							</FormControl>
									<SelectContent>
										<SelectGroup>
											<SelectItem value='apple'>Apple</SelectItem>
											<SelectItem value='banana'>Banana</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='destination'
					render={({ field }) => (
						<FormItem className='rounded-sm bg-secondary px-5 py-4 text-center'>
							<FormLabel className='block rounded-md bg-primary py-2'>
								To
							</FormLabel>
							<FormControl>
								<Select>
									<SelectTrigger className='h-8 w-[180px] border-none  bg-inherit text-background'>
										<SelectValue placeholder='Select a fruit' {...field} />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value='apple'>Apple</SelectItem>
											<SelectItem value='banana'>Banana</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}
