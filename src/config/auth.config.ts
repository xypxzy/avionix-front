import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { authService } from '../service/auth.service'

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
		newUser: '/signup',
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			idToken: true,
		}),
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'username' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string
					password: string
				}
				const user = await authService.authenticate(email, password)

				return user
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, user }) {
			if (account && account.type === 'credentials') {
				token.userId = account.providerAccountId
				token.accessToken = user?.accessToken
				token.accessExpiresIn = user?.accessExpiresIn
				token.refreshToken = user?.refreshToken
				token.refreshExpiresIn = user?.refreshExpiresIn
				token.roles = user?.roles
			}

			if (account && account.type === 'oauth') {
				token.id_token = account.id_token
			}
			return token
		},
		async session({ session, token }) {
			session.user.id = token?.userId as string
			session.user.idToken = token?.id_token as string
			session.user.accessToken = token?.accessToken
			session.user.accessExpiresIn = token?.accessExpiresIn
			session.user.refreshToken = token?.refreshToken
			session.user.refreshExpiresIn = token?.refreshExpiresIn
			session.user.roles = token?.roles

			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}
