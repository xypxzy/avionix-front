import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface User {
		role: string
		tokenType: string
		accessToken: string
		refreshToken: string
		refreshExpiresIn: string
		accessExpiresIn: number
		idToken: string
	}

	interface Session extends DefaultSession {
		user: User
		expires: string
		error: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		userId: string
	}
}
