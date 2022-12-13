import styled from 'styled-components'

interface Props {
  onClick: () => void
}
const TodoHeader = ({ onClick }: Props) => (
  <Container>
    <Title>
      TO - DO <pre />
      LIST
    </Title>
    <LogoutButton onClick={onClick}>로그아웃</LogoutButton>
  </Container>
)

export default TodoHeader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #665a48;
  box-shadow: 1px 1px 1px 1px #999;
  width: 24%;
`

const Title = styled.h1`
  color: #fffbe9;
  margin-top: 80px;
  margin-left: 8px;
`

const LogoutButton = styled.button`
  position: absolute;
  width: 120px;
  height: 40px;
  margin-left: 27px;
  bottom: 20px;
  border: none;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`
