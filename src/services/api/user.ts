import { client } from '@/src/services/axios'

const USER_URL = '/client/api'

class UserService {
	async getUserInfo(access: string) {
		return await client
			.get(`${USER_URL}/customer`, { headers: { Authorization: access } })
			.then(res => res.data)
			.catch(error => console.log(error))
	}
}

const userService = new UserService()

export default userService
