import { client } from '../client'

export const createTodoAPI = async (params: { todo: string }) => {
  try {
    const url = '/todos'
    const userToken = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' }
    const response = await client.post(url, params, { headers: headers })
    return response
  } catch (e) {
    throw e
  }
}
