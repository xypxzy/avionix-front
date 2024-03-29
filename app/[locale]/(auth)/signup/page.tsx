import RegisterForm from '@/src/components/shared/RegisterForm/RegisterForm'
import {RegisterSlider} from "@/src/components/shared/RegisterForm/RegisterSlider";

export default function Register() {
  return (
    <div className='flex w-full items-center justify-between'>
      <RegisterSlider />
      <RegisterForm />
    </div>
  )
}
