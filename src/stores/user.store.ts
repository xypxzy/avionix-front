import UserService from '@/src/services/api/user'
import { IUser } from '@/src/shared/types/user'
import { create } from 'zustand'

type UserStore = {
	user: IUser | null
	setUser: (user: IUser) => void
	fetchUser: (accessToken: string) => Promise<void>
}

export const useUserStore = create<UserStore>(set => ({
	user: null,
	setUser: user => set({ user }),
	fetchUser: async (accessToken: string) => {
		const user = await UserService.getUserInfo()
		set({ user })
	},
}))
