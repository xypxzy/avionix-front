import { authOptions } from '@/src/shared/config/auth.config'
import nextAuth from 'next-auth'

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST }
