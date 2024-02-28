import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
	pages: {
		signIn: 'sign-in',
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			idToken: true,
		}),
	],
}
