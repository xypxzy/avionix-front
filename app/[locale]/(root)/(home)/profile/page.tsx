'use client'

import { useUserStore } from '@/src/stores/user.store'

export default function Profile() {
	const { user } = useUserStore()

	return (
		<div>
			<ul>{user?.email}</ul>
			<ul>{user?.firstName}</ul>
			<ul>{user?.lastName}</ul>
			<ul>{user?.phone}</ul>
			<ul>{user?.gender}</ul>
			<ul>{user?.nationality}</ul>
			<ul>{user?.passportId}</ul>
		</div>
	)
}
