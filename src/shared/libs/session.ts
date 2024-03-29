import { getServerSession } from 'next-auth/next'
import { authOptions } from '../config/auth.config'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}