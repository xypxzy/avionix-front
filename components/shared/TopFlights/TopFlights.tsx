'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { LinkEnum } from '@/routes/route'
import Link from 'next/link'

export default function TopFlights() {
	return (
		<section>
			{/* TODO: посмотреть можно ли заменить на header tag */}
			<div className='my-8 flex w-full items-center justify-between'>
				<h3 className='text-xl'>Top flights</h3>
				<Link href={LinkEnum.Flights}>
					<Button
						variant='link'
						className='text-foreground underline hover:text-muted-foreground'
					>
						Browse all flights
					</Button>
				</Link>
			</div>
			<div className='flex flex-col gap-8 lg:flex-row'>
				<Card className='w-full border-2 lg:w-1/5 flex flex-col justify-between'>
					<CardHeader className='rounded-t-md border-b-2 bg-primary p-4 text-primary-foreground'>
						<CardTitle className='text-lg font-normal'>Card Title</CardTitle>
					</CardHeader>
					<CardContent className='pt-4 pb-0'>
						<p className='mb-4 text-xs'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<picture>
							<img
								src='https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='card-image'
								className='rounded-sm max-h-[180px]'
							/>
						</picture>
					</CardContent>
					<CardFooter className='px-6 py-1 flex-1 items-end'>
						<Link href={LinkEnum.Flights}>
							<Button
								variant='link'
								className='items-start px-0 text-sm text-foreground underline hover:text-muted-foreground'
							>
								More information
							</Button>
						</Link>
					</CardFooter>
				</Card>

				<Accordion
					type='single'
					collapsible
					className='flex flex-1 flex-col gap-6'
				>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-4'>
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	)
}
