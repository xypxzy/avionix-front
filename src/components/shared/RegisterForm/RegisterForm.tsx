'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/src/components/ui/button'
import { Card, CardContent } from '@/src/components/ui/card'
import { Form } from '@/src/components/ui/form'
import { useToast } from '@/src/components/ui/use-toast'
import { registerFormSchema } from '@/src/lib/validations/registerSchema'
import { formatDate } from '@/src/utils/formatDate'
import { RegisterFormStep } from './RegisterFormStep'
import { renderFormFields } from './RenderFormFields'

type Inputs = z.infer<typeof registerFormSchema>
type FieldName = keyof Inputs

export interface StepProps {
	id: number
	fields?: FieldName[]
}

const steps: StepProps[] = [
	{
		id: 1,
		fields: ['email', 'phone', 'password', 'confirmPassword'],
	},
	{
		id: 2,
		fields: ['OTP'],
	},
	{
		id: 3,
		fields: ['firstName', 'lastName', 'gender'],
	},
	{
		id: 4,
		fields: [
			'dateOfBirth',
			'nationality',
			'passportId',
			'passportExpiryDate',
			'agreedToTermsOfUse',
		],
	},
]

export default function RegisterForm() {
	const { toast } = useToast()
	const [currentStep, setCurrentStep] = useState(0)
	const [previousStep, setPreviousStep] = useState(0)
	const delta = currentStep - previousStep

	const form = useForm<Inputs>({
		resolver: zodResolver(registerFormSchema),
	})

	const onSubmit: SubmitHandler<Inputs> = async (formData: Inputs) => {
		try {
			const url = `${process.env.NEXT_PUBLIC_API_URL}/customer`

			console.log(formData)

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
			}
		} catch (error) {
			console.error('Error registering customer:', error)
		}
	}

	console.log(form.formState.errors)

	const next = async () => {
		const fields = steps[currentStep].fields
		const output = await form.trigger(fields as FieldName[], {
			shouldFocus: true,
		})

		if (!output) return

		if (currentStep < steps.length - 1) {
			if (currentStep === steps.length - 2) {
				await form.handleSubmit(onSubmit)()
			}
			setPreviousStep(currentStep)
			setCurrentStep(step => step + 1)
		}
	}

	const prev = () => {
		if (currentStep > 0) {
			setPreviousStep(currentStep)
			setCurrentStep(step => step - 1)
		}
	}

	return (
		<>
			<RegisterFormStep currentStep={currentStep} steps={steps} />
			<Card>
				<CardContent className='pb-0'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='space-y-5 last:space-y-0'
						>
							{currentStep === 0 && renderFormFields(0, form)}
							{currentStep === 1 && renderFormFields(1, form)}
							{currentStep === 2 && renderFormFields(2, form)}
							{currentStep === 3 && renderFormFields(3, form)}
							{currentStep === steps.length - 1 && (
								<Button className='w-full' type='submit'>
									Submit
								</Button>
							)}
						</form>
					</Form>
					<div className='space-y-2 py-6'>
						{currentStep !== steps.length - 1 && (
							<Button className='w-full' onClick={next}>
								Next
							</Button>
						)}
						<Button
							className='w-full'
							onClick={prev}
							disabled={currentStep === 0}
						>
							Prev
						</Button>
					</div>
				</CardContent>
			</Card>
		</>
	)
}
