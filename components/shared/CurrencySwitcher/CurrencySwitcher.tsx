import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export default function CurrencySwitcher() {
	return (
		<Select>
			<SelectTrigger
				className='h-8 w-14 space-x-2 border-none p-0 text-sm'
				aria-label='change currency'
			>
				<SelectValue placeholder={'USD'} defaultValue={'usd'} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='usd'>USD</SelectItem>
				<SelectItem value='som'>SOM</SelectItem>
				<SelectItem value='rub'>RUB</SelectItem>
			</SelectContent>
		</Select>
	)
}
