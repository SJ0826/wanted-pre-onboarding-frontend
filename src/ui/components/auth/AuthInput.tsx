import { ChangeEvent, memo } from 'react'
import styled from 'styled-components'

interface Props {
  label: string
  id: string
  type: 'email' | 'password' | 'passwordCheck'
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error?: {
    isError: boolean
    message: string
  }
}
const AuthInput = ({ label, id, type, value, onChange, error }: Props) => (
  <Container>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <Input id={id} name={id} type={type} value={value} onChange={onChange} />
    {value.length > 0 && !error?.isError && <ErrorMessage>{error?.message}</ErrorMessage>}
  </Container>
)

export default memo(AuthInput)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  weight: 100%;
  height: 96px;
  & + & {
    margin-top: 25px;
  }
`

const InputLabel = styled.label`
  width: 100%;
  color: rgb(78, 89, 104);
  font-size: 17px;
  display: block;
  margin-bottom: 4px;
`

const Input = styled.input<{ isError?: boolean }>`
  width: 500px;
  height: 50px;
  border: 1px solid #f4ead5;
  border-radius: 8px;
  padding: 0 20px;
  background-color: ${(props) => props.isError && '#fff2f5'};
  outline: ${(props) => props.isError && '0.5px solid #d21111'};
  &:focus-visible {
    outline: ${(props) => (props.isError ? '0.5px solid #d21111' : '0.5px solid #a2cbfdba')};
  }
`

const ErrorMessage = styled.span`
  margin-top: 7px;
  padding-left: 4px;
  font-size: 12px;
  color: #d21111;
`
