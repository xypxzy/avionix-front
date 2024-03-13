import { Button } from '@/src/components/ui/button'
import { Calendar } from '@/src/components/ui/calendar'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/src/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/radio-group'
import { registerFormSchema } from '@/src/shared/types/schemas/registerSchema'
import { cn } from '@/src/shared/utils/classnames'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

export const RenderFormFields = (
	currentStep: number,
	form: UseFormReturn<z.infer<typeof registerFormSchema>>
) => {
	switch (currentStep) {
		case 1:
			return (
				<>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enter your email</FormLabel>
								<FormControl>
									<Input placeholder='Email' type='email' required {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enter your phone</FormLabel>
								<FormControl>
									<Input placeholder='+XXX XXX XXX XXX' required {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Create a password</FormLabel>
								<FormControl>
									<Input
										placeholder='Password'
										type='password'
										required
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm a password</FormLabel>
								<FormControl>
									<Input placeholder='Password' type='password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</>
			)
		case 2:
			return (
				<>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>First name</FormLabel>
								<FormControl>
									<Input placeholder='First name' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='lastName'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last name</FormLabel>
								<FormControl>
									<Input placeholder='Last name' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='gender'
						render={({ field }) => (
							<FormItem className='space-y-3'>
								<FormLabel>Notify me about...</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className='flex flex-col space-y-1'
									>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='MALE' />
											</FormControl>
											<FormLabel className='font-normal'>Men</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='FEMALE' />
											</FormControl>
											<FormLabel className='font-normal'>Women</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='OTHER' />
											</FormControl>
											<FormLabel className='font-normal'>Other</FormLabel>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</>
			)
		case 3:
			return (
				<>
					<FormField
						control={form.control}
						name='dateOfBirth'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Date of birth</FormLabel>
								<FormControl>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													id='dateOfBirth'
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
												disabled={date => date > new Date()}
												onSelect={field.onChange}
											/>
										</PopoverContent>
									</Popover>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='nationality'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nationality</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='passportId'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Passport ID</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='passportExpiryDate'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Passport expiry date</FormLabel>
								<FormControl>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													id='passportExpiryDate'
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
												disabled={date => date < new Date()}
												onSelect={field.onChange}
											/>
										</PopoverContent>
									</Popover>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</>
			)
		case 4:
			return (
				<>
					<div>Check Your Email</div>
					<Button type='submit'>Submit</Button>
				</>
			)
		default:
			return null
	}
}
