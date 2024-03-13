import axios from 'axios'
import {client} from "@/src/services/axios";

const AUTH_URL = 'client/api/'

class AuthService {
	public async authenticate(username: string, password: string) {
		const formData = new URLSearchParams()
		formData.append('email', username)
		formData.append('password', password)

		try {
			const response = await client.post(AUTH_URL, formData, {
				headers: {
					Accept: 'application/json',
					Authorization: `Basic ${btoa(`${username}:${password}`)}`,
				},
			})
			return response.data
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.response?.data.status)
			}
		}
	}
}

export default new AuthService()

