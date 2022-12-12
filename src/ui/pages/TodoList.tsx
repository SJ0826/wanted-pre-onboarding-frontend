import { useNavigate } from 'react-router-dom'

const TodoList = () => {
  const navigater = useNavigate()
  const onClickHandler = () => {
    localStorage.removeItem('token')
    navigater('/')
  }
  return <button onClick={onClickHandler}>로그아웃</button>
}

export default TodoList
