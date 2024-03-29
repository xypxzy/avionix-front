import nextAuth from 'next-auth'
import {authOptions} from "@/src/shared/config/auth.config";

const handler = nextAuth(authOptions)

export { handler as GET, handler as POST }
