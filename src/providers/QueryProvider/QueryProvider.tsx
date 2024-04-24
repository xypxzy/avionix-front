'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import React, { useState } from 'react'

export function QueryProvider({ children }: { children: React.ReactNode }) {
	const [client] = useState(new QueryClient())

	return (
		<>
			<QueryClientProvider client={client}>
				<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	)
}
