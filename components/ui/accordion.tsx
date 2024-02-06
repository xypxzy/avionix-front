'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('border-2 rounded-md', className)}
		{...props}
	/>
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className='flex'>
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex flex-1 gap-4 bg-primary rounded-md  text-secondary text-lg font-normal items-center p-4 transition-all hover:underline [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:border-b-2 [&[data-state=open]]:rounded-b-none',
				className
			)}
			{...props}
		>
			<ChevronDown className='bg-secondary rounded-full text-background h-9 w-9 p-1 shrink-0 transition-transform duration-200' />
			{children}
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
		{...props}
	>
		<div className={cn('pb-4 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
