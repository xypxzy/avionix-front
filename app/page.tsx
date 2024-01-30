import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>Home Page</h1>
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>Place content for the popover here.</PopoverContent>
			</Popover>
			<Button variant='default'>Button</Button>
			<Button variant='destructive'>Button</Button>
			<Button variant='outline'>Button</Button>
			<Button variant='secondary'>Button</Button>
			<Input />
		</main>
	)
}
