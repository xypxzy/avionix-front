import {
	AccordionContent,
	AccordionDefault,
	AccordionItem,
	AccordionTrigger,
} from '@/src/components/ui/accordionDefault'
import { Label } from '@/src/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/radio-group'

export const Transplants = () => {
	return (
		<div>
			<AccordionDefault
				type='single'
				collapsible
				className='flex flex-col gap-6'
			>
				<AccordionItem value='item-1' className={`border-0`}>
					<AccordionTrigger className={`border-0 bg-none text-black`}>
						<p className={`text-base font-bold`}>Пересадки</p>
						<p
							className={`ml-auto text-foreground underline hover:text-muted-foreground`}
						>
							clean
						</p>
					</AccordionTrigger>
					<AccordionContent className={`flex flex-col gap-2`}>
						<RadioGroup defaultValue='comfortable'>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='default' id='r1' />
								<Label htmlFor='r1' className={`cursor-pointer`}>
									Любые
								</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='comfortable' id='r2' />
								<Label htmlFor='r2' className={`cursor-pointer`}>
									Прямой рейс
								</Label>
							</div>
							<div className='flex items-center space-x-2'>
								<RadioGroupItem value='compact' id='r3' />
								<Label htmlFor='r3' className={`cursor-pointer`}>
									До 1 пересадки
								</Label>
							</div>
							<div className={`flex items-center space-x-2`}>
								<RadioGroupItem value={`null`} id={`r4`} />
								<Label htmlFor={`r4`} className={`cursor-pointer`}>
									До 2 пересадок
								</Label>
							</div>
						</RadioGroup>
					</AccordionContent>
				</AccordionItem>
			</AccordionDefault>
		</div>
	)
}
