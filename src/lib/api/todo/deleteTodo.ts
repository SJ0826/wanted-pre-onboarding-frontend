import { client } from '../client'

export const deleteTodoAPI = async (id: number) => {
  try {
    const url = `/todos/${id}`
    const userToken = localStorage.getItem('token')
    const headers = { Authorization: `Bearer ${userToken}` }
    const response = await client.delete(url, { headers: headers })
    return response
  } catch (e) {
    throw e
  }
}
