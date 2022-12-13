import { memo } from 'react'
import { BsCheck, BsTrashFill, BsFillPencilFill } from 'react-icons/bs'
import styled, { css } from 'styled-components'
import { TodoParam } from '../../../lib/interface/todoInterface'

interface Props {
  onToggleDone: (id: number, todo: string, isCompleted: boolean) => void
  onClickRemove: (id: number) => void
}
const TodoItem = ({ id, todo, isCompleted, onToggleDone, onClickRemove }: Props & TodoParam) => (
  <Container>
    <CheckSquere isCompleted={isCompleted} onClick={() => onToggleDone(id, todo, !isCompleted)}>
      {isCompleted && <BsCheck size="25px" color="#5F7161" />}
    </CheckSquere>
    <Text isCompleted={isCompleted}>{todo}</Text>
    <RemoveButton onClick={() => onClickRemove(id)}>
      <BsTrashFill size="22px" />
    </RemoveButton>
    <EditButton>
      <BsFillPencilFill size="22px" />
    </EditButton>
  </Container>
)

export default memo(TodoItem)

const Container = styled.div`
  display: flex;
  align-items: center;
`

const CheckSquere = styled.div<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin: 10px;
  border: 2px solid #d0c9c0;
  background-color: white;
  cursor: pointer;
  ${(props) =>
    props.isCompleted &&
    css`
      border: 2px solid #5f7161;
    `}
`

const Text = styled.div<{ isCompleted: boolean }>`
  font-size: 25px;
  margin-left: 20px;
  ${(props) =>
    props.isCompleted &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`

const RemoveButton = styled.div`
  position: absolute;
  margin: 8px 90px 0px 5px;
  right: 0;
  cursor: pointer;
  color: #eee3cb;
  &:hover {
    color: #967e76;
  }
`

const EditButton = styled.div`
  position: absolute;
  margin: 8px 130px 0px 5px;
  right: 0;
  cursor: pointer;
  color: #eee3cb;
  &:hover {
    color: #8fc1d4;
  }
`
