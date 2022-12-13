import styled from 'styled-components'
import { FiLogOut } from 'react-icons/fi'

interface Props {
  onClick: () => void
}
const TodoHeader = ({ onClick }: Props) => (
  <Container>
    <Title>TO - DO LIST</Title>
    <LogoutWrapper>
      <FiLogOut size="25px" onClick={onClick} />
    </LogoutWrapper>
  </Container>
)

export default TodoHeader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 620x;
`

const Title = styled.h1`
  margin-top: 45px;
`

const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 25px;
  position: absolute;
  right: 0;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`
