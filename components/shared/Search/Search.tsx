'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
	console.log('rendering')

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const searchInput = formData.get('search')
		console.log(searchInput)
	}

	return (
		<div className='relative w-fit min-w-[360px] max-lg:hidden'>
			<form
				onSubmit={handleSubmit}
				className=' relative flex min-h-[46px]
			grow items-center gap-1 rounded-xl border border-border'
			>
				<Input
					type='text'
					id='search'
					name='search'
					placeholder='Search globally'
					className='border-none shadow-none outline-none'
				/>
				<Button type='submit' variant={'default'} className='mr-2 h-8 p-2'>
					<SearchIcon
						width={16}
						height={16}
						className='cursor-pointer dark:invert-[0.5]'
					/>
				</Button>
			</form>
		</div>
	)
}

export default Search
