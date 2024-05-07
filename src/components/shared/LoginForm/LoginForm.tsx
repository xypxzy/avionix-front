'use client'

import { Button } from '@/src/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/src/components/ui/card'
import { useToast } from '@/src/components/ui/use-toast'
import { loginFormSchema } from '@/src/shared/types/schemas/loginSchema'
import { formatDate } from '@/src/shared/utils/formatDate'
import { handleLoginError } from '@/src/shared/utils/handleAuthError'
import { useUserStore } from '@/src/stores/user.store'
import Link from 'next/link'
import { useEffect } from 'react'
import { Checkbox } from '../../ui/checkbox'
import { LoginWithGoogle } from './LoginWithGoogle'

export default function LoginForm() {
	const session = useSession()
	const { fetchUser } = useUserStore()
	const router = useRouter()
	const { toast } = useToast()

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
	})

	async function onSubmit(formData: z.infer<typeof loginFormSchema>) {
		await signIn('credentials', {
			email: formData.email,
			password: formData.password,
			redirect: false,
			callbackUrl: '/',
		}).then(res => {
			if (res?.error) {
				// Провальный toast
				toast({
					title: 'Credentials Login Failed',
					description: handleLoginError(Number(res.error)),
					variant: 'destructive',
				})
			} else {
				// Успешный toast после авторизации
				toast({
					title: 'Your Successfully Sign in',
					description: formatDate(new Date(), 'en'),
					variant: 'default',
				})

				// TODO: нужно сделать логики при выборе Remember Me, хранить токен авторизации в localStorage, cookies и после при каждом входе в систему должен получать с localStorage и делать авто-авторизацию
				if (formData.rememberMe) {
					localStorage.setItem('TokenAuth', formData.email)
				} else {
					localStorage.removeItem('TokenAuth')
				}

				// Auto-redirect после авторизации
				router.push('/')
			}
		})
	}

	useEffect(() => {
		// Получения данных о пользователе
		if (session.data?.user.accessToken) {
			console.log(session.data?.user.accessToken)
			fetchUser(session.data.user.accessToken)
		}
	}, [fetchUser, session?.data?.user.accessToken])

	return (
		<Card className='card__border__layer mx-auto p-6'>
			<CardTitle className='text-xl'>Login</CardTitle>
			<CardDescription className='text-xs'>
				Enter your email below to sign in your account
			</CardDescription>
			<CardContent className='mt-6 grid gap-4 p-0'>
				<LoginWithGoogle />

				<div className='relative mt-2 '>
					<div className='absolute inset-0 flex items-center '>
						<span className='w-full border-t' />
					</div>
					<div className='relative flex justify-center text-xs uppercase'>
						<span className='bg-background px-2 text-muted-foreground'>
							Or continue with
						</span>
					</div>
				</div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-xs'>Enter</FormLabel>
									<FormControl>
										<Input
											placeholder='Enter Your Email'
											type='email'
											required
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-xs'>Password</FormLabel>
									<FormControl>
										<Input type='password' required {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='rememberMe'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className='flex justify-between'>
											<div className='flex items-center space-x-2' {...field}>
												<Checkbox id='terms' className='rounded' />
												<label
													htmlFor='terms'
													className='text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
												>
													Remember me
												</label>
											</div>
											<div>
												<Button variant='link' className='text-xs'>
													<Link href='/'>Forgot your password?</Link>
												</Button>
											</div>
										</div>
									</FormControl>
								</FormItem>
							)}
						/>

						<Button type='submit' variant={'default'} className='w-full'>
							Submit
						</Button>
					</form>
				</Form>

				<div className='text-center text-xs'>
					Don’t have an account?
					<Button variant={'link'} className='px-2 text-xs'>
						<Link href='/signup'>Create an account</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
