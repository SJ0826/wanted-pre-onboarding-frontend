import { ChangeEvent, FormEvent, memo, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { createTodoAPI } from '../../lib/api/todo/createTodo'
import { deleteTodoAPI } from '../../lib/api/todo/deleteTodo'
import { getTodoAPI } from '../../lib/api/todo/getTodos'
import { upDateTodoAPI } from '../../lib/api/todo/updateTodo'
import { TodoParam } from '../../lib/interface/todoInterface'
import getDateString from '../../lib/utils/getDate'
import TodoCreate from '../components/todo/TodoCreate'
import TodoHeader from '../components/todo/TodoHeader'
import TodoList from '../components/todo/TodoList'

const TodoListPage = () => {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState<TodoParam[]>([])

  const { dateString } = getDateString()

  const onClickLogout = useCallback(() => {
    localStorage.removeItem('token')
    navigate('/')
  }, [])

  const onChangeCreateInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value
      setInputValue(text)
    },
    [inputValue],
  )

  const onSubmitTodo = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      await createTodo()
      await getTodos()
      setInputValue('')
    },
    [inputValue, todoList],
  )

  const onToggleDone = useCallback(
    async (id: number, todo: string, isCompleted: boolean) => {
      await updateTodo(id, todo, isCompleted)
      await getTodos()
    },
    [todoList],
  )

  const onClickRemove = useCallback(
    async (id: number) => {
      await deleteTodo(id)
      await getTodos()
    },
    [todoList],
  )

  const updateEditTodo = async (id: number, todo: string, isCompleted: boolean) => {
    await updateTodo(id, todo, isCompleted)
    await getTodos()
  }

  const getTodos = async () => {
    try {
      const data = await getTodoAPI()
      setTodoList(data)
    } catch (e) {
      alert('요청하신 데이터를 불러올 수 없습니다.')
    }
  }

  const createTodo = async () => {
    try {
      const params = { todo: inputValue }
      await createTodoAPI(params)
    } catch (e) {
      alert('요청하신 데이터를 추가 할 수 없습니다.')
    }
  }

  const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
    try {
      const param = {
        todo,
        isCompleted,
      }
      await upDateTodoAPI(id, param)
    } catch (e) {
      alert('요청하신 데이터를 처리할 수 없습니다.')
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoAPI(id)
    } catch (e) {
      alert('요청하신 데이터를 처리할 수 없습니다.')
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/')
    getTodos()
  }, [])

  return (
    <Container>
      <TodoHeader onClick={onClickLogout} today={dateString} />
      <TodoList
        todos={todoList}
        onToggleDone={onToggleDone}
        onClickRemove={onClickRemove}
        updateEditTodo={updateEditTodo}
      />
      <TodoCreate value={inputValue} onChange={onChangeCreateInput} onSubmit={onSubmitTodo} />
    </Container>
  )
}

export default memo(TodoListPage)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 620px;
  background-color: #fffbe9;
`
