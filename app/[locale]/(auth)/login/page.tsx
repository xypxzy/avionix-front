import LoginForm from '@/src/components/shared/LoginForm/LoginForm'

export default function LoginPage() {
	return (
		<div className='container flex h-screen flex-col items-center justify-center space-y-14'>
			<div className='relative mx-10 -mt-40 w-full space-y-8 sm:w-1/2 lg:w-1/3'>
				<LoginForm/>
			</div>
		</div>

	)
}
