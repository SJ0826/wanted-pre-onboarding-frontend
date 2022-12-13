import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import TodoCreate from '../components/todo/TodoCreate'
import TodoHeader from '../components/todo/TodoHeader'

const TodoList = () => {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const onClickLogout = useCallback(() => {
    localStorage.removeItem('token')
    navigate('/')
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/')
  }, [])
  return (
    <Container>
      <TodoHeader onClick={onClickLogout} />
      <TodoCreate />
    </Container>
  )
}

export default TodoList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 620px;
  background-color: #fffbe9;
`
