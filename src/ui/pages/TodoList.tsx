import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TodoList = () => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/')
  }, [])
  return <button onClick={onClickHandler}>로그아웃</button>
}

export default TodoList
