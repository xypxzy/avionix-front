import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { User } from 'lucide-react'

export default function ControlPanel() {
	return (
		<div className='hidden h-5 items-center space-x-4 md:flex'>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<User />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<Separator orientation='vertical' />

			<Select>
				<SelectTrigger className='h-8 w-14 space-x-2 border-none p-0 text-sm'>
					<SelectValue placeholder={'EN'} defaultValue={'En'} />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='En'>EN</SelectItem>
					<SelectItem value='Ru'>RUS</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className='h-8 w-14 space-x-2 border-none p-0 text-sm'>
					<SelectValue placeholder={'USD'} defaultValue={'usd'} />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='usd'>USD</SelectItem>
					<SelectItem value='som'>SOM</SelectItem>
					<SelectItem value='rub'>RUB</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
