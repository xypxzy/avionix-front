'use client'

import googleIcon from '@/public/assets/images/google-icon.svg'
import { Button } from '@/src/components/ui/button'
import { useToast } from '@/src/components/ui/use-toast'
import { formatDate } from '@/src/utils/formatDate'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export function LoginWithGoogle() {
	const { toast } = useToast()

	const onSignIn = () => {
		signIn('google', {
			redirect: false,
			callbackUrl: '/',
		}).then(res => {
			if (res?.error) {
				toast({
					title: 'Google Login Failed',
					description: res.error,
					variant: 'destructive',
				})
			} else {
				toast({
					title: 'Your Successfully Google SignIn',
					description: formatDate(new Date(), 'en'),
					variant: 'default',
				})
			}
		})
	}

	return (
		<Button
			variant={'outline'}
			className='flex w-full gap-4 py-5 text-base'
			onClick={onSignIn}
		>
			<Image src={googleIcon} alt={'google icon'} width={24} height={24} />
			Google
		</Button>
	)
}
