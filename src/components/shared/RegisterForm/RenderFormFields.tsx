import { Button } from '@/src/components/ui/button'
import { Calendar } from '@/src/components/ui/calendar'
import { Checkbox } from '@/src/components/ui/checkbox'
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
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { CardTitle } from '@/src/components/ui/card'
import {registerFormSchema} from "@/src/shared/types/schemas/registerSchema";
import {cn} from "@/src/shared/utils/classnames";
import { PhoneInput } from '@/src/components/ui/phone-input'
import {RegisterOtp} from "@/src/components/shared/RegisterForm/RegisterOTP";

export const renderFormFields = (
	currentStep: number,
	form: UseFormReturn<z.infer<typeof registerFormSchema>>,
) => {
	switch (currentStep) {
		case 0:
			return (
				<>
					<CardTitle className='pt-6 text-lg font-normal'>
						Create your account
					</CardTitle>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enter your email</FormLabel>
								<FormControl>
									<Input placeholder='Email' type='email' {...field} />
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
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<PhoneInput placeholder='Enter a phone number' {...field} />
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
									<Input placeholder='Password' type='password' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						{...form.register("confirmPassword", {
							required: true,
							validate: (val: string) => {
								console.log('validate')
								if (form.watch('password') !== val) {
									return "Your passwords do no match";
								}
							},
						})}
						control={form.control}
						name={"confirmPassword"}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm a password</FormLabel>
								<FormControl>
									<Input placeholder='Confirm a password' type='password' {...field}/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</>
			)
		case 1:
		return (
			<>
				<CardTitle className='pt-6 text-lg font-normal'>
					Personal Info
					</CardTitle>
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
							<FormItem className='space-y-1'>
								<FormLabel>Gender</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className='flex items-center space-x-4'
									>
										<FormItem className='flex items-end justify-between space-x-2'>
											<FormControl>
												<RadioGroupItem value='MALE' />
											</FormControl>
											<FormLabel className='font-normal'>Male</FormLabel>
										</FormItem>
										<FormItem className='flex items-end justify-between space-x-2'>
											<FormControl>
												<RadioGroupItem value='FEMALE' />
											</FormControl>
											<FormLabel className='font-normal'>Female</FormLabel>
										</FormItem>
									</RadioGroup>
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
					<CardTitle className='pt-6 text-lg font-normal'>
						Passport details
					</CardTitle>
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
														'w-full pl-3 text-left font-normal bg-inherit hover:bg-inherit hover:text-muted-foreground',
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
														'w-full bg-inherit hover:bg-inherit hover:text-muted-foreground',
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
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='agreedToTermsOfUse'
						render={({ field }) => (
							<FormItem className='flex w-full items-center justify-between'>
								<FormLabel>Term of use</FormLabel>
								<FormControl>
									<Checkbox
										className='mr-4 size-6'
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</>
			)
		case 3:
			return <RegisterOtp form={form} />
		default:
			return null
	}
}