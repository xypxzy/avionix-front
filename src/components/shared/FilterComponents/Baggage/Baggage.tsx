import {
	AccordionContent,
	AccordionDefault,
	AccordionItem,
	AccordionTrigger,
} from '@/src/components/ui/accordionDefault'
import { Checkbox } from '@/src/components/ui/checkbox'

export const Baggage = () => {
	return (
		<AccordionDefault type='multiple' className='flex flex-col gap-6'>
			<AccordionItem value='item-1' className={`border-0`}>
				<AccordionTrigger className={`border-0 bg-none text-black`}>
					<p className={`text-base font-bold`}>Багаж</p>
					<p
						className={`ml-auto text-foreground underline hover:text-muted-foreground`}
					>
						clean
					</p>
				</AccordionTrigger>
				<AccordionContent className={`flex flex-col gap-2`}>
					<div className={`flex items-center gap-3`}>
						<Checkbox
							id='terms'
							className={`size-5 rounded checked:bg-dark_blue`}
						/>
						<label
							htmlFor='terms'
							className='cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
						>
							Ручная кладь
						</label>
					</div>
					<div className={`flex items-center gap-3`}>
						<Checkbox id='terms2' className={`size-5 rounded`} />
						<label
							htmlFor='terms2'
							className='cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
						>
							Зарегистрированный багаж
						</label>
					</div>
				</AccordionContent>
			</AccordionItem>
		</AccordionDefault>
	)
}
