'use client'

import { useParams } from 'next/navigation'

export default function Booking() {
	const params = useParams<{ slug: string }>()

	console.log(params)

	return <div>Booking {params.slug.toUpperCase()}</div>
}
