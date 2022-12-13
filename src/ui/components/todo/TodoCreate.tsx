import { ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'

const TodoCreate = () => (
  <Container>
    <TodoForm>
      <TodoInput placeholder="할 일을 입력해주세요" />
      <TodoButton type="submit">추가</TodoButton>
    </TodoForm>
  </Container>
)
export default TodoCreate

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 720px;
  height: 80px;
  bottom: 0;
  background-color: #f4ead5;
`

const TodoForm = styled.form`
  margin: 10px;
`
const TodoInput = styled.input`
  width: 500px;
  height: 50px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  &:focus-visible {
    outline: 0.5px solid #665a48;
  }
`
const TodoButton = styled.button`
  width: 75px;
  height: 50px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  margin-left: 10px;
  color: #665a48;
  background-color: #fff8ea;
  &:hover {
    cursor: pointer;
    background-color: #665a48;
    color: #fff8ea;
  }
`
