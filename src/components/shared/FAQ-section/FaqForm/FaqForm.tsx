'use client'
import { Button } from '@/src/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { toast } from '@/src/components/ui/use-toast'
import DiscoveryService from '@/src/services/api/discovery'
import { formSchema } from '@/src/shared/types/schemas/faqFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FaqForm = () => {
	const t = useTranslations('FAQ')
	const [checked, setChecked] = useState(true)
	const { mutateAsync, isPending } = useMutation({
		mutationFn: DiscoveryService.setFaqList,
		onSuccess: () => {
			toast({
				title: 'Your successfully sent message',
				variant: 'default',
			})
		},
		onError: () => {
			toast({
				title: 'Your message sent failed',
				variant: 'destructive',
			})
		},
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	})

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(!event.target.checked)
	}

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		await mutateAsync(values)
	}

	return (
		<div
			className={`mt-16 flex w-full max-w-screen-md flex-col items-center justify-between gap-6 rounded-xl border-2 border-dark_blue bg-primary p-4 text-background sm:flex-row md:p-12`}
		>
			<p className={`w-full max-w-[300px] text-xs font-medium`}>
				{t('right_card.text')}
			</p>
			<div className={`w-full max-w-[320px]`}>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col items-center gap-1 md:gap-4'
					>
						<div className={`w-full space-y-2`}>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className={`h-8 w-full rounded-sm border border-dark_blue px-1 py-0 text-[12px] text-dark_blue focus:border-0 md:h-full md:px-4 md:py-2 md:text-sm`}
												placeholder={t('right_card.input_name')}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className={`h-8 w-full rounded-sm border border-dark_blue px-1 py-0 text-[12px] text-dark_blue focus:border-0 md:h-full md:px-4 md:py-2 md:text-sm`}
												placeholder={t('right_card.input_email')}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='message'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												className={`h-8 w-full rounded-sm border border-dark_blue p-1 text-[12px] text-dark_blue focus:border-0 md:h-full md:px-4 md:py-2 md:text-sm`}
												placeholder={t('right_card.input_area')}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex w-full items-center gap-5 '>
							<input
								onChange={handleCheckboxChange}
								className={`scale-150 cursor-pointer`}
								type='checkbox'
								id={`terms`}
							/>
							<label
								htmlFor='terms'
								className='max-w-[225px] cursor-pointer text-[10px] font-[400]'
							>
								{t('right_card.under_button')}
							</label>
						</div>
						<Button
							disabled={checked}
							className={`mt-2 w-full max-w-[271px] whitespace-nowrap rounded-xl bg-light_blue py-2 transition hover:bg-dark_blue md:mt-5`}
							type='submit'
						>
							{isPending ? t('loading') : t('right_card.button')}
						</Button>
					</form>
				</Form>
			</div>
		</div>
	)
}

export { FaqForm }
