import { NextAuthOptions, getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { authService } from '../services/auth.service'

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
		async jwt({ token, account, profile }) {
			if (account && account.type === 'credentials') {
				token.userId = account.providerAccountId
			}
			if (account && account.type === 'oauth') {
				token.id_token = account.id_token
			}
			return token
		},
		async session({ session, token, user }) {
			session.user.id = token.userId
			session.user.idToken = token.id_token as string
			return session
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
}

export const getServerAuthSession = () => getServerSession(authOptions)
