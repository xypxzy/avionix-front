'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import React, {useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from '@/src/components/ui/button'
import {Card, CardContent} from '@/src/components/ui/card'
import {Form} from '@/src/components/ui/form'
import {RegisterFormStep} from './RegisterFormStep'
import {renderFormFields} from './RenderFormFields'
import {registerFormSchema} from "@/src/shared/types/schemas/registerSchema";
import {RegisterFieldName, RegisterInputs} from "@/src/shared/types/auth";
import {STEPS} from "@/src/shared/const/auth";
import AuthService from '@/src/services/api/auth'
import {cn} from "@/src/shared/utils/classnames";

export default function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(0)
  // const [previousStep, setPreviousStep] = useState(0)
  // const delta = currentStep - previousStep

  const form = useForm<RegisterInputs>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      passportId: '',
      nationality: ''
    }
  })

  const onSubmit: SubmitHandler<RegisterInputs> = async (formData: RegisterInputs, event?: React.BaseSyntheticEvent) => {
    try {
      if (event && event.type === 'submit') {
        return;
      }

      await AuthService.register(formData);
    } catch (error) {
      console.error('Error registering customer:', error)
    }
  }

  const next = async () => {
    const fields = STEPS[currentStep].fields
    const output = await form.trigger(fields as RegisterFieldName[], {
      shouldFocus: true,
    })

    if (!output) return

    if (currentStep < STEPS.length - 1) {
      if (currentStep === STEPS.length - 2) {
        await form.handleSubmit(onSubmit)()
      }
      // setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      // setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }

  console.log(form.formState.errors)

  return (
    <div className="w-2/5 lg:w-2/4">
      <div className="relative -top-8 flex flex-col items-center justify-center gap-y-4">
        <RegisterFormStep currentStep={currentStep} steps={STEPS}/>
        <Card>
          <CardContent className='min-w-[430px] pb-0'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn('space-y-4 last:space-y-0', Object.keys(form.formState.errors).length && 'space-y-1')}
              >
                {currentStep === 0 && renderFormFields(0, form)}
                {currentStep === 1 && renderFormFields(1, form)}
                {currentStep === 2 && renderFormFields(2, form)}
                {currentStep === 3 && renderFormFields(3, form)}
              </form>
            </Form>
            {currentStep < STEPS.length - 1 && (
              <div className='space-y-2 py-6'>
                <Button className='w-full' onClick={next}>
                  {currentStep === STEPS.length - 2 ? 'Submit' : 'Next'}
                </Button>
                <Button
                  variant='outline'
                  className='w-full'
                  onClick={prev}
                  disabled={currentStep === 0}
                >
                  Back
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}