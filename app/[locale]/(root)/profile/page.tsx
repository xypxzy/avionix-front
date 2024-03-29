'use client'

import { useUserStore } from '@/src/stores/user.store'
import { useSession } from 'next-auth/react'

export default function Profile() {
  const { user } = useUserStore()
  const { data } = useSession()

  console.log(data)

  return (
    <div>
      <ul>{user?.email}</ul>
      <ul>{user?.firstName}</ul>
      <ul>{user?.lastName}</ul>
      <ul>{user?.phone}</ul>
      <ul>{user?.gender}</ul>
      <ul>{user?.nationality}</ul>
      <ul>{user?.passportId}</ul>
    </div>
  )
}