import Logo from '@/src/components/shared/Logo/Logo'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Separator } from '@/src/components/ui/separator'
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
			className={`${styles.full_bleed} bg-dark_blue py-8 text-background dark:bg-background dark:text-foreground`}
		>
			<div className="grid grid-cols-1 justify-center lg:grid-cols-4">
				<div className={`max-w-[328px] mx-auto`}>
					<div className='mb-8'>
						<Logo isFooter/>
					</div>
					<ul className={`flex flex-col gap-3`}>
						<li>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href={`https://2gis.kg/bishkek/firm/70000001020527681/74.575695%2C42.833417?m=74.575996%2C42.83333%2F19.97`}>Vasilyevsky tract 105, Manas airport, Bishkek, Kyrgyz Republic</Link>
						</li>
						<li>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href='tel:+99677777777'>+996 777 77 77 77</Link>
						</li>
						<li>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href='mailto:info@tripper.com'>info@tripper.com</Link>
						</li>
						<li className={`flex items-center`}>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href='mailto:info@tripper.com'>Term of use</Link>
							<div className={`mx-4 h-7 w-[1.5px] rounded-[1px] bg-white`}></div>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href='mailto:info@tripper.com'>Privacy police</Link>
						</li>
					</ul>
				</div>
				<div className={`max-w-[105px] mx-auto`}>
					<h3 className='mb-8 text-base  font-[600]'>Company</h3>
					<ul className='gap-3 space-y-4'>
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
				<div className={`max-w-[152px] mx-auto`}>
					<h3 className='mb-8 text-base font-[600]'>Quick links</h3>
					<ul className='space-y-4'>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/flights'}>Flights</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/flights'}>Hotels</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/services'}>Services</Link>
						</li>
					</ul>
				</div>
				<div className={`max-w-[271px] mx-auto`}>
					<h3 className='mb-6 text-base  font-[600]'>Newsletter</h3>
					<div className='relative w-fit min-w-[280px] space-y-2 sm:min-w-[360px]'>
						<form
							className='relative flex min-h-[46px] grow items-center gap-1 rounded-sm border border-primary dark:border-border'>
							<Input
								type='email'
								id='email'
								name='email'
								placeholder='Email'
								className='border-none bg-inherit pe-[50px] shadow-none outline-none'
							/>
							<Separator
								orientation='vertical'
								className='absolute right-12 h-[35px] bg-background '

							/>
							<Button
								type='submit'
								variant={'ghost'}
								className='absolute right-0 ml-1 mr-2 h-8 p-1 hover:bg-primary-foreground'
							>
								<ArrowRight
									width={26}
									height={26}
									className='cursor-pointer'
									color="#80C7D9"
									strokeWidth={1.5}
								/>
							</Button>
						</form>
						<p className='p-2 text-xs text-blue_light'>
							<Link href={'/notfound'} className={`hover:text-primary`}>Subscribe to get news & offers</Link>
						</p>
						<Separator
							orientation='horizontal'
							className='w-full bg-background '

						/>
						<div className='flex items-center justify-start gap-5 p-2 lg:items-start'>
							<Link href={'instagram.com'} className={`flex gap-5 hover:text-primary`}>
								<p>Find us on social media</p>
								<InstagramIcon width={25}/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
