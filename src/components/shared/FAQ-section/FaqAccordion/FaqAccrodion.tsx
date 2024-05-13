'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/src/components/ui/accordion'
import { Button } from '@/src/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { IFaq } from '@/src/shared/types/discovery'
import { LinkEnum } from '@/src/shared/utils/route'
import { FC } from 'react'

interface FaqAccordionProps {
	faqList?: IFaq[]
	isLoading?: boolean
	isSearchPage?: boolean
}

export const FaqAccordion: FC<FaqAccordionProps> = ({
	faqList,
	isLoading,
	isSearchPage,
}) => {
	const t = useTranslations('FAQ')

	if (isLoading) {
		return (
			<div className={`w-full max-w-[480px] text-center text-lg md:text-2xl`}>
				{t('loading')}
			</div>
		)
	}

	return (
		<div
			className={`${isSearchPage ? 'w-full max-w-screen-md md:max-w-screen-sm' : 'w-full'}`}
		>
			<div className={`mb-7 flex items-center justify-between`}>
				<h3 className='text-xl font-medium'>{t('title')}</h3>
				<Link href={LinkEnum.Flights}>
					<Button
						variant='link'
						className='text-foreground underline hover:text-muted-foreground'
					>
						{t('link')}
					</Button>
				</Link>
			</div>
			<Accordion type='single' collapsible className='flex flex-col gap-6'>
				{faqList?.map((item, index) => (
					<AccordionItem key={index} value={`item-${index + 1}`}>
						<AccordionTrigger
							className={`bg-light_blue text-lg font-normal text-dark_blue`}
						>
							{item.question}
						</AccordionTrigger>
						<AccordionContent>{item.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}
