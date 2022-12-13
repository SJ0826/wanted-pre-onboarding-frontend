import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import TodoHeader from '../components/todo/TodoHeader'

const TodoList = () => {
  const navigate = useNavigate()
  const onClickLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/')
  }, [])
  return (
    <Container>
      <TodoHeader onClick={onClickLogout} />
      <TodoContainer></TodoContainer>
    </Container>
  )
}

export default TodoList

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  max-height: 620px;
  background-color: #e5d9b6;
`

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
