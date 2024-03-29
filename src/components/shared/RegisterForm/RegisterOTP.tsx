import React from 'react';
import {Button} from "@/src/components/ui/button";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/src/components/ui/input-otp";
import AuthService from '@/src/services/api/auth'
import {useToast} from "@/src/components/ui/use-toast";
import {formatDate} from '@/src/shared/utils/formatDate';
import {RegisterInputs} from "@/src/shared/types/auth";
import {UseFormReturn} from "react-hook-form";
import {redirect} from "next/navigation";

interface RegisterOTPProps {
  form: UseFormReturn<RegisterInputs>
}

export const RegisterOtp: React.FC<RegisterOTPProps> = ({form}) => {
  const [value, setValue] = React.useState("")
  const {toast} = useToast()

  const handleSubmit = async () => {
    const response = await AuthService.confirmEmail(value, form.getValues('email'))

    console.log(response)

    if (response.status === 200) {
      toast({
        title: 'Your successfully registered!',
        description: formatDate(new Date(), 'en'),
        color: 'success',
      })
      form.reset()
      redirect('/login')
    } else {
      toast({
        title: 'Your failed registered, Please try again!',
        color: 'error',
      })
    }
  }

  return (
    <div className="py-6">
      <h2 className='text-lg font-normal'>
        Email verification
      </h2>
      <div>
        <span className='text-xs'>
          <p className='inline'>Is this your email? Enter the six-digit code from the
          letter.</p>
          <p className='inline italic text-primary'>{form.watch('email')}</p>
        </span>
        <InputOTP
          maxLength={6}
          className='justify-center pt-4'
          value={value}
          onChange={(value) => setValue(value)}
          render={({slots}) => (
            <InputOTPGroup>
              {slots.map((slot, index) => (
                <InputOTPSlot key={index} {...slot} />
              ))}
            </InputOTPGroup>
          )}
        />

        <Button className='mt-6 w-full' variant='default' disabled={value.length < 6} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}