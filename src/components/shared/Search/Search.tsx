'use client'
import React, { useRef, useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { IFlightQueryParams } from '@/src/shared/types/flights';
import { Locale } from '@/src/shared/types/i18n';
import { useSearchStore } from '@/src/stores/search.store';
import { SearchIcon } from 'lucide-react';
import { useParams, useRouter} from 'next/navigation';
import { ResultsOnSearch } from '@/src/components/shared/ResultsOnSearch/ResultsOnSearch';

const Search = () => {
	const { locale } = useParams();
	const { fetchSearchResult, searchResult } = useSearchStore();
	const [searchInput, setSearchInput] = useState('');
	const router = useRouter();
	const wrapperRef = useRef<HTMLDivElement>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await fetchResults(searchInput);
		router.replace('/search');
		setSearchInput('');
	}

	async function fetchResults(input: string) {
		const queryParams = new URLSearchParams({
			lan: (locale as Locale) || 'en',
			text: input,
		}) as IFlightQueryParams;
		await fetchSearchResult(queryParams);
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setSearchInput(input);
		if (input.trim()) {
			fetchResults(input);
		}
	};

	const clearSearch = () => {
		setSearchInput('');
	};

	return (
		<div className='relative mx-10 w-full flex-1 max-lg:hidden' ref={wrapperRef}>
			<form
				onSubmit={handleSubmit}
				className='relative flex min-h-[25px] grow items-center gap-1 rounded-xl border border-border'
			>
				<Input
					type='text'
					id='search'
					name='search'
					value={searchInput}
					onChange={handleInputChange}
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
			{searchInput.trim() && searchResult?.flights && searchResult.flights.length > 0 && (
				<ResultsOnSearch data={searchResult.flights} clearSearch={clearSearch} />
			)}
		</div>
	);
};

export default Search;
