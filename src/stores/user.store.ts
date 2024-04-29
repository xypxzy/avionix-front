import UserService from '@/src/services/api/user'
import { IUser } from '@/src/shared/types/user'
import { create } from 'zustand'

type UserStore = {
	user: IUser | null
	isLoading: boolean // Добавляем isLoading
	setUser: (user: IUser) => void
	setLoading: (isLoading: boolean) => void // Добавляем setLoading
	fetchUser: () => Promise<void>
}

export const useUserStore = create<UserStore>(set => ({
	user: null,
	isLoading: false,
	setUser: user => set({ user }),
	setLoading: isLoading => set({ isLoading }),
	fetchUser: async () => {
		set({ isLoading: true })
		const user = await UserService.getUserInfo()
		set({ user, isLoading: false })
	},
}))
