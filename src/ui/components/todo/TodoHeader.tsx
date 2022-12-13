import styled from 'styled-components'
import { FiLogOut } from 'react-icons/fi'

interface Props {
  today: string
  onClick: () => void
}
const TodoHeader = ({ onClick, today }: Props) => (
  <Container>
    <Title>TO - DO LIST</Title>
    <LogoutWrapper onClick={onClick}>
      로그아웃 <FiLogOut size="25px" />
    </LogoutWrapper>
    <Date>Date: {today}</Date>
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
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`

const Date = styled.div`
  position: absolute;
  right: 0;
  margin-top: 100px;
  margin-right: 30px;
  text-decoration: underline;
`
