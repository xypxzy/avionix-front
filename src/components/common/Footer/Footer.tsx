'use client'
import Logo from '@/src/components/shared/Logo/Logo'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Separator } from '@/src/components/ui/separator'
import {
	ArrowRight,
	InstagramIcon,
} from 'lucide-react'
import Link from 'next/link'
import styles from './Footer.module.css'
import {useTranslations} from "next-intl";
import React from "react";

export default function Footer() {
	const t = useTranslations('Footer')
	return (
		<footer
			className={`${styles.full_bleed} bg-dark_blue p-4 text-background dark:bg-background dark:text-foreground md:p-8 lg:p-12`}
		>
			<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
				<div className={`max-w-[330px] lg:mx-auto`}>
					<div className='mb-8'>
						<Logo isFooter/>
					</div>
					<ul className={`flex flex-col gap-3`}>
						<li>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href={`https://2gis.kg/bishkek/firm/70000001020527681/74.575695%2C42.833417?m=74.575996%2C42.83333%2F19.97`}>{t('location.address')}</Link>
						</li>
						<li>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href='tel:+99677777777'>{t('location.tel')}</Link>
						</li>
						<li>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href='mailto:info@tripper.com'>{t('location.mail')}</Link>
						</li>
						<li className={`flex items-center`}>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href='*'>{t('location.term_of_use')}</Link>
							<div className={`mx-4 h-7 w-[1.5px] rounded-[1px] bg-white`}></div>
							<Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								  href='*'>{t('location.privacy_police')}</Link>
						</li>
					</ul>
				</div>
				<div className={`max-w-[155px] lg:mx-auto`}>
					<h3 className='mb-8 text-base  font-[600]'>{t('company.title')}</h3>
					<ul className='gap-3 space-y-4'>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/contacts'}>{t('company.contacts')}</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/support'}>{t('company.support')}</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/faq'}>{t('company.faq')}</Link>
						</li>
					</ul>
				</div>
				<div className={`max-w-[192px] lg:mx-auto`}>
					<h3 className='mb-8 text-base font-[600]'>{t('quick_links.title')}</h3>
					<ul className='space-y-4'>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/flights'}>{t('quick_links.flights')}</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/hotels'}>{t('quick_links.hotels')}</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/services'}>{t('quick_links.services')}</Link>
						</li>
					</ul>
				</div>
				<div className={`max-w-[271px] lg:mx-auto`}>
					<h3 className='mb-6 text-base  font-[600]'>Newsletter</h3>
					<div className='relative w-fit'>
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
						<p className='p-2 text-xs text-light_blue'>
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
