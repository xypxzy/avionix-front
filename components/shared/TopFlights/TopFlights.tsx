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
			<div className='flex w-full justify-between items-center my-8'>
				<h3 className='text-xl'>Top flights</h3>
				<Link href={LinkEnum.Flights}>
					<Button variant='link' className='text-secondary underline'>
						Browse all flights
					</Button>
				</Link>
			</div>
			<div className='flex gap-8 flex-col lg:flex-row'>
				<Card className='w-full lg:w-1/4 border-2'>
					<CardHeader className='bg-primary p-4 rounded-t-md border-b-2'>
						<CardTitle className='text-lg font-normal'>Card Title</CardTitle>
					</CardHeader>
					<CardContent className='p-4'>
						<p className='mb-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Provident, magni hic, fugiat tenetur necessitatibus nam
						</p>
						<picture>
							<img
								src='https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='card-image'
								className='rounded-sm'
							/>
						</picture>
					</CardContent>
					<CardFooter className='px-4'>
						<Link href={LinkEnum.Flights}>
							<Button
								variant='link'
								className='text-secondary text-base underline items-start px-0'
							>
								More information
							</Button>
						</Link>
					</CardFooter>
				</Card>

				<Accordion
					type='single'
					collapsible
					className='flex-1 flex flex-col gap-6'
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
