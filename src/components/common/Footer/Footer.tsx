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

export default function Footer2() {
    const t = useTranslations('Footer')
    return (
        <footer className={`${styles.full_bleed} bg-foreground py-8 text-background dark:bg-background dark:text-foreground`}>
            <div className={`grid sm:ms-[110px] sm:grid-cols-1 md:m-0 md:grid-cols-1 lg:m-0 lg:grid-cols-3`}>
                <div>
                    <div className='mb-8'>
                        <Logo isFooter/>
                    </div>
                    <ul className={`flex flex-col gap-3`}>
                        <li>
                            <Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
                                  href={`https://2gis.kg/bishkek/firm/70000001020527681/74.575695%2C42.833417?m=74.575996%2C42.83333%2F19.97`}>{t('address')}</Link>
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
                                  href='mailto:info@tripper.com'>{t('term_of_use')}</Link>
                            <div className={`w-[1.5px] h-7 rounded-[1px] bg-white mx-4`}></div>
                            <Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`}
                                  href='mailto:info@tripper.com'>{t('privacy_police')}</Link>
                        </li>
                    </ul>
                </div>
                <div className={`grid sm:grid-cols-1 md:m-0 md:grid-cols-1 lg:m-0 lg:grid-cols-2 justify-between my-10 lg:m-0 lg:ml-[70px]`}>
                    <div>
                        <h3 className='mb-8 text-base  font-[600]'>{t('Company.title')}</h3>
                        <ul className='gap-3 space-y-4'>
                            <li className='cursor-pointer transition hover:text-primary'>
                                <Link href={'/contacts'}>{t('Company.contacts')}</Link>
                            </li>
                            <li className='cursor-pointer transition hover:text-primary'>
                                <Link href={'/support'}>{t('Company.support')}</Link>
                            </li>
                            <li className='cursor-pointer transition hover:text-primary'>
                                <Link href={'/faq'}>{t('Company.faq')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`mt-10 lg:m-0`}>
                        <h3 className='mb-8 text-base font-[600]'>{t('Quick_links.title')}</h3>
                        <ul className='space-y-4'>
                            <li className='cursor-pointer transition hover:text-primary'>
                                <Link href={'/flights'}>{t('Quick_links.flights')}</Link>
                            </li>
                            <li className='cursor-pointer transition hover:text-primary'>
                                <Link href={'/flights'}>{t('Quick_links.hotels')}</Link>
                            </li>
                            <li className='cursor-pointer transition hover:text-primary'>
                                <Link href={'/services'}>{t('Quick_links.services')}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`sm:mt-8 md:m-0 lg:m-0 lg:ml-[70px]`}>
                    <h3 className='mb-6 text-base  font-[600]'>{t('Newsletter.title')}</h3>
                    <div className='relative w-fit min-w-[280px] space-y-2 sm:min-w-[360px]'>
                        <form
                            className='relative flex min-h-[46px] grow items-center gap-1 rounded-sm border border-primary dark:border-border'>
                            <Input
                                type='email'
                                id='email'
                                name='email'
                                placeholder={t('Newsletter.input_placeholder')}
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
                            <Link href={'/notfound'} className={`hover:text-primary`}>{t('Newsletter.subscribe')}</Link>
                        </p>
                        <Separator
                            orientation='horizontal'
                            className='w-full bg-background '

                        />
                        <div className='flex items-center justify-start gap-5 p-2 lg:items-start'>
                            <Link href={'instagram.com'} className={`flex gap-5 hover:text-primary`}>
                                <p>{t('Newsletter.social_media')}</p>
                                <InstagramIcon width={25}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}