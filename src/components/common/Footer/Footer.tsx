'use client'
import Logo from '@/src/components/shared/Logo/Logo'
import { Button } from '@/src/components/ui/button'
import { Separator } from '@/src/components/ui/separator'
import { Instagram} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './Footer.module.css'
import {StarRating} from "@/src/components/shared/StarRatingClick/StarRating";
import {SendComment} from "@/src/components/shared/SendComment/SendComment";

export default function Footer() {
	const t = useTranslations('Footer')

	return (
		<footer
			className={`${styles.full_bleed} bg-dark_blue p-12 py-40 pb-80 text-background dark:bg-background dark:text-foreground`}
		>
			<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
				<div className={`max-w-[330px] lg:mx-auto`}>
					<div className='mb-8'>
						<Logo isFooter />
					</div>
					<ul className={`gap-3 space-y-5`}>
						<li className={`truncate`}>
							<Link
								className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								href={`https://2gis.kg/bishkek/firm/70000001020527681/74.575695%2C42.833417?m=74.575996%2C42.83333%2F19.97`}
							>
								{t('location.address')}
							</Link>
						</li>
						<li>
							<Link
								className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								href='tel:+99677777777'
							>
								{t('location.tel')}
							</Link>
						</li>
						<li>
							<Link
								className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								href='mailto:info@tripper.com'
							>
								{t('location.mail')}
							</Link>
						</li>
						<li className={`flex items-center`}>
							<Link
								className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								href='*'
							>
								{t('location.term_of_use')}
							</Link>
							<div
								className={`mx-4 h-7 w-[1.5px] rounded-[1px] bg-white`}
							></div>
							<Link
								className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
								href='*'
							>
								{t('location.privacy_police')}
							</Link>
						</li>
					</ul>
				</div>
				<div className={`max-w-[155px] lg:mx-auto`}>
					<h3 className='mb-10 text-base  font-[600]'>{t('company.title')}</h3>
					<ul className='gap-3 space-y-5'>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/contacts'}>{t('company.contacts')}</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/support'}>{t('company.support')}</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/faq'}>{t('company.faq')}</Link>
						</li>
						<li className='cursor-pointer transition hover:text-primary'>
							<Link href={'/faq'}>{t('company.help')}</Link>
						</li>
					</ul>
				</div>
				<div className={`max-w-[192px] lg:mx-auto`}>
					<h3 className='mb-8 text-base font-[600]'>
						{t('quick_links.title')}
					</h3>
					<ul className='space-y-5'>
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
				<div className={`max-w-[350px] lg:mx-auto`}>
					<h3 className='mb-6 text-base  font-[600]'>{t('comment.title')}</h3>
					<SendComment/>
					<div className={`mt-4`}>
						<Link href={''} className={`flex items-center gap-4 hover:text-light_blue`}>
							<p>{t('comment.social_media')}</p>
							<Instagram className={`size-6`}/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
