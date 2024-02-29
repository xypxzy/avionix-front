import axios, { AxiosError } from 'axios'

export const authService = {
	authenticate,
}

async function authenticate(username: string, password: string) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/account/signIn`

	const formData = new URLSearchParams()
	formData.append('email', username)
	formData.append('password', password)
	try {
		const response = await axios.post(url, formData, {
			headers: {
				Accept: 'application/json',
				Authorization: `Basic ${btoa(`${username}:${password}`)}`,
			},
		})
		return response.data
	} catch (error: unknown) {
		const errors = error as Error | AxiosError

		if (axios.isAxiosError(errors)) {
			throw new Error(errors.response?.data.status)
		}

		// TODO: catching errors for native case
	}
}
