import { ChangeEvent, memo, useState } from 'react'
import { BsCheck, BsTrashFill, BsFillPencilFill, BsCheckLg, BsXLg } from 'react-icons/bs'
import styled, { css } from 'styled-components'
import { TodoParam } from '../../../lib/interface/todoInterface'

interface Props {
  onToggleDone: (id: number, todo: string, isCompleted: boolean) => void
  onClickRemove: (id: number) => void
  updateEditTodo: any
}

const TodoItem = ({ id, todo, isCompleted, onToggleDone, onClickRemove, updateEditTodo }: Props & TodoParam) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editText, setEditText] = useState('')

  const onClickEdit = () => {
    setIsEdit(!isEdit)
  }

  const onChangeEditText = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setEditText(text)
  }

  const onClickEditDoneButton = () => {
    updateEditTodo(id, editText, isCompleted)
    setIsEdit(false)
  }

  return isEdit ? (
    <Container>
      <CheckSquere isCompleted={isCompleted} onClick={() => onToggleDone(id, todo, !isCompleted)}>
        {isCompleted && <BsCheck size="25px" color="#5F7161" />}
      </CheckSquere>
      <EditText autoFocus value={editText} onChange={onChangeEditText} />
      <EditDoneButton onClick={onClickEditDoneButton}>
        <BsCheckLg size="22px" />
      </EditDoneButton>
      <CancelButton onClick={onClickEdit}>
        <BsXLg size="22px" />
      </CancelButton>
    </Container>
  ) : (
    <Container>
      <CheckSquere isCompleted={isCompleted} onClick={() => onToggleDone(id, todo, !isCompleted)}>
        {isCompleted && <BsCheck size="25px" color="#5F7161" />}
      </CheckSquere>
      <Text isCompleted={isCompleted}>{todo}</Text>
      <EditButton onClick={onClickEdit}>
        <BsFillPencilFill size="22px" />
      </EditButton>
      <RemoveButton onClick={() => onClickRemove(id)}>
        <BsTrashFill size="22px" />
      </RemoveButton>
    </Container>
  )
}

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
  border-radius: 3px;
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
    color: #e97777;
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

const EditDoneButton = styled.button`
  position: absolute;
  margin: 8px 130px 0px 5px;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #8fc1d4;
`

const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 8px 90px 3px 5px;
  right: 0;
  cursor: pointer;
  color: #e97777;
`

const EditText = styled.input`
  width: 350px;
  height: 30px;
  margin-left: 20px;
  border: 2px solid #eee3cb;
  border-radius: 5px;
  font-size: 20px;
`
