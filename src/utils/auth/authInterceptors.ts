'use client'

import axios from 'axios'

const authInterceptor = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
})

authInterceptor.interceptors.request.use(config => {
	config.headers.Authorization = `${config}`

	return config
})

export default authInterceptor
