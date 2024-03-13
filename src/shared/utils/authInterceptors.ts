import axios from 'axios'
import { useSession } from 'next-auth/react'

const authInterceptor = axios.create()

authInterceptor.interceptors.request.use(config => {
	const { data } = useSession()
	const idToken = data?.user.idToken

	if (idToken) {
		config.headers.Authorization = `Bearer ${idToken}`
	}

	return config
})

export default authInterceptor
