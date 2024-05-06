import { NextAuthOptions, getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import AuthService from '../../services/api/auth'

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
				return await AuthService.authenticate(email, password)
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, profile, user }) {
			if (account && account.type === 'credentials') {
				token.userId = account.providerAccountId
				token.accessToken = user.accessToken
				token.refreshToken = user.refreshToken
				token.accessExpiresIn = user.accessExpiresIn
				token.refreshExpiresIn = user.refreshExpiresIn
				token.roles = user.roles
				token.tokenType = user.tokenType
			}
			if (account && account.type === 'oauth') {
				token.id_token = account.id_token
				token.idToken = user.idToken
			}
			return token
		},
		async session({ session, token, user }) {
			session.user.id = token.userId
			session.user.idToken = token.id_token as string
			session.user.accessToken = token.accessToken
			session.user.refreshToken = token.refreshToken
			session.user.roles = token.roles
			session.user.tokenType = token.tokenType
			session.user.accessExpiresIn = token.accessExpiresIn
			session.user.refreshExpiresIn = token.refreshExpiresIn

			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}

export const getServerAuthSession = () => getServerSession(authOptions)
