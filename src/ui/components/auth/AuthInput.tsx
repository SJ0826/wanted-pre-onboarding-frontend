import styled from 'styled-components'

interface Props {
  label: string
  id: string
  type: 'email' | 'password' | 'text'
}
const AuthInput = ({ label, id, type }: Props) => (
  <Container>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <Input id={id} name={id} type={type} />
  </Container>
)

export default AuthInput

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
  outline: ${(props) => props.isError && '0.5px solid #d21111'};
  background-color: ${(props) => props.isError && '#fff2f5'};
  &:focus-visible {
    outline: ${(props) => (props.isError ? '0.5px solid #d21111' : '0.5px solid #a2cbfdba')};
  }
`
