import Logo from '@/components/shared/Logo/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
	ArrowRight,
	CreditCard,
	FacebookIcon,
	InstagramIcon,
	TwitterIcon,
} from 'lucide-react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
	return (
		<footer
			className={`${styles.full_bleed} bg-foreground py-8 text-background dark:bg-background dark:text-foreground`}
		>
			<div className='flex flex-col justify-between gap-10 lg:flex-row lg:gap-4'>
				<div className='flex min-w-[280px] flex-col items-center justify-center gap-2 sm:min-w-[360px] lg:items-start'>
					<div className='mb-8'>
						<Logo isFooter />
					</div>
					<p>117 Abbey Rd, London NW8 9AY, UK</p>
					<a href='tel:+99677777777'>+996 777 77 77 77</a>
					<a href='mailto:info@tripper.com'>info@tripper.com</a>
				</div>
				<div className='hidden gap-8 lg:flex lg:gap-12'>
					<div className='flex flex-col gap-6'>
						<h3 className='text-base'>Company</h3>
						<ul className='space-y-4'>
							<li className='cursor-pointer transition hover:text-primary'>
								<Link href={'/contacts'}>Contacts</Link>
							</li>
							<li className='cursor-pointer transition hover:text-primary'>
								<Link href={'/support'}>Support</Link>
							</li>
							<li className='cursor-pointer transition hover:text-primary'>
								<Link href={'/faq'}>FAQ</Link>
							</li>
						</ul>
					</div>
					<div className='flex flex-col gap-6'>
						<h3 className='text-base'>Quick links</h3>
						<ul className='space-y-4'>
							<li className='cursor-pointer transition hover:text-primary'>
								<Link href={'/flights'}>Flights</Link>
							</li>
							<li className='cursor-pointer transition hover:text-primary'>
								<Link href={'/services'}>Services</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center lg:items-start'>
					<h3 className='mb-6 text-base'>Newsletter</h3>
					<div className='relative w-fit min-w-[280px] space-y-2 sm:min-w-[360px]'>
						<form className='relative flex min-h-[46px] grow items-center gap-1 rounded-xl border border-primary dark:border-border'>
							<Input
								type='email'
								id='email'
								name='email'
								placeholder='Email'
								className='border-none bg-inherit shadow-none outline-none'
							/>
							<Separator
								orientation='vertical'
								className='h-[20px] bg-background'
							/>
							<Button
								type='submit'
								variant={'ghost'}
								className='ml-1 mr-2 h-8 p-2 hover:bg-primary'
							>
								<ArrowRight
									width={16}
									height={16}
									className='cursor-pointer dark:invert-[0.5]'
								/>
							</Button>
						</form>
						<p className='text-xs text-primary'>
							Subscribe to get news & offers
						</p>
						<Separator className='bg-background' />
						<div className='flex items-center justify-between lg:items-start'>
							<p>Find us on social media</p>
							<ul className='flex gap-4'>
								<li>
									<Link href={'instagram.com'}>
										<InstagramIcon />
									</Link>
								</li>
								<li>
									<Link href={'facebook.com'}>
										<FacebookIcon />
									</Link>
								</li>
								<li>
									<Link href={'x.com'}>
										<TwitterIcon />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col-reverse items-center justify-between gap-4 pt-10 lg:flex-row lg:items-start'>
				<div className='flex min-w-[280px] items-center justify-center space-x-4 sm:min-w-[360px] lg:items-start lg:justify-start'>
					<p>Term of use</p>
					<Separator
						orientation='vertical'
						className='h-[14px] bg-background'
					/>
					<p>Privacy policy</p>
				</div>
				<div>&copy; Copyright 2024 Avionix</div>
				<div className='flex min-w-[280px] justify-center  gap-4 sm:min-w-[360px] lg:justify-end'>
					<CreditCard width={24} height={24} />
					<CreditCard width={24} height={24} />
					<CreditCard width={24} height={24} />
					<CreditCard width={24} height={24} />
				</div>
			</div>
		</footer>
	)
}
