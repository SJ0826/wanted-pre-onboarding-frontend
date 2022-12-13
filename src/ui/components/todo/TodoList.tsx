import { memo } from 'react'
import styled from 'styled-components'
import { TodoParam } from '../../../lib/interface/todoInterface'
import TodoItem from './TodoItem'

interface Props {
  todos: TodoParam[]
  onToggleDone: (id: number, todo: string, isCompleted: boolean) => void
  onClickRemove: (id: number) => void
}
const TodoList = ({ todos, onToggleDone, onClickRemove }: Props) => (
  <Container>
    {todos.map((todo) => (
      <TodoItem key={todo.id} {...todo} onToggleDone={onToggleDone} onClickRemove={onClickRemove} />
    ))}
  </Container>
)

export default memo(TodoList)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 40px;
`
