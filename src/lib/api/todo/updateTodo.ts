import { client } from '../client'

export const upDateTodoAPI = async (id: number, params: { isCompleted: boolean }) => {
  try {
    const url = `/todo/${id}`
    const userToken = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${userToken}`, 'Content-Type': 'application/json' }
    const response = await client.put(url, params, { headers: headers })
    return response
  } catch (e) {
    throw e
  }
}
