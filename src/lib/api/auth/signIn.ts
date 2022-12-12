import { UserParam } from '../../interface/userInterface'
import { client } from '../client'

export const signInAPI = async (user: Omit<UserParam, 'passwordCheck'>) => {
  const url = '/auth/signin'
  const headers = { 'Content-Type': 'application/json' }
  const response = await client.post(url, user, { headers: headers })
  return response
}
