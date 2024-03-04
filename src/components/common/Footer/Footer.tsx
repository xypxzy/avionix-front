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

export default function Footer2() {
    return (
        <footer className={`${styles.full_bleed} bg-foreground py-8 text-background dark:bg-background dark:text-foreground`}>
            <div className={`grid sm:ms-[100px] sm:grid-cols-1 md:m-0 md:grid-cols-2 lg:m-0 lg:grid-cols-4`}>
                <div>
                    <div className='mb-8'>
                        <Logo isFooter/>
                    </div>
                    <ul className={`flex flex-col gap-3`}>
                        <li>
                            <Link className={`text-[16px] font-[400] leading-[21px] hover:text-primary`} href={`https://2gis.kg/bishkek/firm/70000001020527681/74.575695%2C42.833417?m=74.575996%2C42.83333%2F19.97`}>117 Abbey Rd, London NW8 9AY, UK</Link>
                        </li>
                        <li>
                            <Link  className={`text-[16px] font-[400] leading-[21px] hover:text-primary`} href='tel:+99677777777'>+996 777 77 77 77</Link>
                        </li>
                        <li>
                            <Link  className={`text-[16px] font-[400] leading-[21px] hover:text-primary`} href='mailto:info@tripper.com'>info@tripper.com</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-8 text-base  font-[500]'>Company</h3>
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
                <div className={`sm:mt-8 md:m-0 lg:m-0`}>
                    <h3 className='mb-8 text-base font-[500]'>Quick links</h3>
                    <ul className='space-y-4'>
                        <li className='cursor-pointer transition hover:text-primary'>
                            <Link href={'/flights'}>Flights</Link>
                        </li>
                        <li className='cursor-pointer transition hover:text-primary'>
                            <Link href={'/services'}>Services</Link>
                        </li>
                    </ul>
                </div>
                <div className={`sm:mt-8 md:m-0 lg:m-0`}>
                    <h3 className='mb-6 text-base  font-[500]'>Newsletter</h3>
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
                            Subscribe to get news & offers
                        </p>
                        <Separator
                            orientation='horizontal'
                            className='w-full bg-background '

                        />
                        <div className='flex items-center justify-start gap-5 p-2 lg:items-start'>
                            <p>Find us on social media</p>
                            <ul className='flex gap-4'>
                                <li>
                                    <Link href={'instagram.com'}>
                                        <InstagramIcon width={25}/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}