import { TodoParam } from '../../interface/todoInterface'
import { client } from '../client'

export const getTodoAPI = async (): Promise<TodoParam[]> => {
  try {
    const url = '/todos'
    const userToken = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${userToken}` }
    const response = await client.get(url, { headers: headers })
    return response.data
  } catch (e) {
    throw e
  }
}
