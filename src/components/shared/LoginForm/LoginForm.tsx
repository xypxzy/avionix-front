'use client'

import { Button } from '@/src/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Card, CardContent } from '@/src/components/ui/card'
import { useToast } from '@/src/components/ui/use-toast'
import { loginFormSchema } from '@/src/types/schemas/loginSchema'
import { formatDate } from '@/src/utils/formatDate'
import { handleLoginError } from '@/src/utils/handleAuthError'

export default function LoginForm() {
	const router = useRouter()
	const { toast } = useToast()
	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
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
				form.setError('root', {
					message: handleLoginError(Number(res.error)),
					type: 'error',
				})
				toast({
					title: 'Credentials Login Failed',
					description: handleLoginError(Number(res.error)),
					variant: 'destructive',
				})
			} else {
				toast({
					title: 'Your Successfully Sign in',
					description: formatDate(new Date(), 'en'),
					variant: 'default',
				})
				router.push('/')
			}
		})
	}

	return (
		<Card className='mx-auto'>
			<div className='rounded-xl bg-accent p-5 text-center text-secondary-foreground dark:text-secondary'>
				<p className='text-2xl font-bold'>Welcome</p>
				<p className='text-sm'>Let&apos;s take you to your account.</p>
			</div>
			<CardContent className='p-6'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-xs'>Enter your email</FormLabel>
									<FormControl>
										<Input
											placeholder='Email'
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
									<FormLabel className='text-xs'>Create a password</FormLabel>
									<FormControl>
										<Input
											placeholder='Password'
											type='password'
											required
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormMessage />
						<Button type='submit' variant={'outline'} className='w-full'>
							Submit
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
