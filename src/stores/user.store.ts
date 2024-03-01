import axios from 'axios'
import { create } from 'zustand'

import { User } from '@/src/types/user'

type UserStore = {
	user: User | null
	setUser: (user: User) => void
	fetchUser: (accessToken: string) => Promise<void>
}

export const useUserStore = create<UserStore>(set => ({
	user: null,
	setUser: user => set({ user }),
	fetchUser: async (accessToken: string) => {
		const user = await axios
			.get(`${process.env.NEXT_PUBLIC_API_URL}/customer`, {
				headers: {
					Authorization: `${accessToken}`,
				},
			})
			.then(res => res.data)
		set({ user })
	},
}))
