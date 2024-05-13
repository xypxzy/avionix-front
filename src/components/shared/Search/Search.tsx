'use client'

import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { IFlightQueryParams } from '@/src/shared/types/flights'
import { Locale } from '@/src/shared/types/i18n'
import { useSearchStore } from '@/src/stores/search.store'
import { SearchIcon } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const Search = () => {
	const { locale } = useParams()
	const { fetchSearchResult } = useSearchStore()

	const router = useRouter()
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const searchInput = formData.get('search') as string
		const queryParams = new URLSearchParams({
			lan: (locale as Locale) || 'en',
			text: searchInput,
		}) as IFlightQueryParams
		await fetchSearchResult(queryParams).then(() => {
			router.push('/search')
		})
	}

	return (
		<div className='relative mx-10 w-full flex-1 max-lg:hidden'>
			<form
				onSubmit={handleSubmit}
				className=' relative flex min-h-[25px]
			grow items-center gap-1 rounded-xl border border-border'
			>
				<Input
					type='text'
					id='search'
					name='search'
					placeholder='Search globally'
					className='border-none shadow-none outline-none'
				/>
				<Button
					type='submit'
					variant={'default'}
					aria-label='search globally'
					className='mr-2 h-8 p-2'
				>
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
