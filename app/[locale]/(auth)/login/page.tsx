import LoginForm from '@/src/components/shared/LoginForm/LoginForm'
import { LoginWithGoogle } from '@/src/components/shared/LoginForm/LoginWithGoogle'

import { Separator } from '@/src/components/ui/separator'

export default function LoginPage() {
	return (
		<div className='relative mx-10 -mt-40 w-full space-y-8 sm:w-1/2 lg:w-1/3'>
			<LoginForm />
			<div className='flex items-center justify-center gap-4'>
				<Separator className='w-4/12' />
				<p className='whitespace-nowrap text-xs uppercase'>or continue with</p>
				<Separator className='w-4/12' />
			</div>
			<LoginWithGoogle />
		</div>
	)
}
