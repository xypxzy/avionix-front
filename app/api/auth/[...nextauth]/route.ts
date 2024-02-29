import { authOptions } from '@/src/config/auth.config'
import nextAuth from 'next-auth'

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST }
