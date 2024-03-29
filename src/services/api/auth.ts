import { client } from '@/src/services/axios'
import { RegisterInputs } from '@/src/shared/types/auth'
import axios from 'axios'

const AUTH_URL = 'client/api/'

class AuthService {
	public async authenticate(username: string, password: string) {
		const formData = new URLSearchParams()
		formData.append('email', username)
		formData.append('password', password)

		try {
			const response = await client.post(
				AUTH_URL + 'account/signIn',
				formData,
				{
					headers: {
						Authorization: `Basic ${btoa(`${username}:${password}`)}`,
					},
				}
			)

			return response.data
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.response?.data.status)
			}
		}
	}

	public async register(formData: RegisterInputs) {
		try {
			const response = await client.post(
				AUTH_URL + 'customer',
				JSON.stringify(formData)
			)
			return response.data
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.response?.data.status)
			}
		}
	}

	public async confirmEmail(otpPassword: string, email: string) {
		try {
			const confirmData = {
				email,
				code: otpPassword,
			}

			return  await client.patch(
				AUTH_URL + 'account/confirmEmail',
				JSON.stringify(confirmData)
			)

		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.response?.data.status)
			}
		}
	}
}

const AuthServiceInstance = new AuthService()

export default AuthServiceInstance
