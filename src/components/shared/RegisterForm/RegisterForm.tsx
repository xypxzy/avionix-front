'use client'

import { Button } from '@/src/components/ui/button'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/src/components/ui/card'

import { useToast } from '@/src/components/ui/use-toast'
import { registerFormSchema } from '@/src/types/schemas/registerSchema'

import { Form } from '@/src/components/ui/form'
import { formatDate } from '@/src/utils/formatDate'
import axios from 'axios'
import { useState } from 'react'
import { RenderFormFields } from './RenderFormFields'

export default function RegisterForm() {
	const form = useForm<z.infer<typeof registerFormSchema>>({
		resolver: zodResolver(registerFormSchema),
		defaultValues: {
			email: '',
			phone: '',
			password: '',
			confirmPassword: '',
			firstName: '',
			lastName: '',
			gender: '',
			dateOfBirth: undefined,
			nationality: '',
			passportId: '',
			passportExpiryDate: undefined,
			agreedToTermsOfUse: true,
		},
	})
	const { toast } = useToast()
	const [currentStep, setCurrentStep] = useState(1)
	const handleNextChange = (step: number) => {
		setCurrentStep(step)
	}

	async function onSubmit(formData: z.infer<typeof registerFormSchema>) {
		try {
			const url = `${process.env.NEXT_PUBLIC_API_URL}/customer`

			const response = await axios.post(url, formData, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			})

			if (response.status === 200) {
				toast({
					title: 'Your Successfully Register',
					description: formatDate(new Date(), 'en'),
					color: 'success',
				})
				form.reset()
			} else {
				toast({
					title: 'Your Failed Register, Try again!',
					color: 'error',
				})

				if (response.data && response.data.details) {
					form.setError('email', {
						message: response.data.details,
						type: 'error',
					})
				} else {
					form.setError('email', {
						message: 'User Registration Failed',
						type: 'error',
					})
				}
			}
		} catch (error) {
			console.error('Error registering customer:', error)
		}
	}

	return (
		<Card className='mx-auto w-2/3 min-w-[500px]'>
			<CardHeader>
				<CardTitle>Register</CardTitle>
			</CardHeader>
			<CardContent className='h-[350px]'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
						{RenderFormFields(currentStep, form)}
					</form>
				</Form>
				<Button onClick={() => setCurrentStep(prev => prev + 1)}>Next</Button>
			</CardContent>
			<CardFooter className='absolute -top-20 flex gap-5'>
				<Button onClick={() => handleNextChange(1)}>1</Button>
				<Button onClick={() => handleNextChange(2)}>2</Button>
				<Button onClick={() => handleNextChange(3)}>3</Button>
				<Button onClick={() => handleNextChange(4)}>4</Button>
			</CardFooter>
		</Card>
	)
}
