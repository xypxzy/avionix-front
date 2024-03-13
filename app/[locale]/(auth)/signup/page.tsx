import bgImg from '@/public/assets/images/signup-image.png'
import RegisterForm from '@/src/components/shared/RegisterForm/RegisterForm'
import Image from 'next/image'

export default function Register() {
	return (
		<>
			<Image
				src={bgImg}
				alt={'hero'}
				className='h-screen object-contain object-left'
			/>
			<div className='relative mx-10 w-full space-y-8 sm:w-1/2 lg:w-1/3'>
				<RegisterForm />
			</div>
		</>
	)
}
