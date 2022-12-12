import { useCallback } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import AuthInput from '../components/auth/AuthInput'

const SignIn = () => {
  const navigate = useNavigate()

  const onClickSignUp = useCallback(() => navigate('./signup'), [])

  return (
    <Container>
      <Title>회원가입</Title>
      <AuthInput label="Email" id="email" type="email" />
      <AuthInput label="Password" id="password" type="password" />
      <SignInButton>Sign Up</SignInButton>
    </Container>
  )
}

export default SignIn

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  text-align: center;
  margin-top: 100px;
  color: #616264;
  font-weight: 100;
`

const SignInButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 54px;
  margin-top: 30px;
  color: white;
  font-size: 20px;
  background-color: #ccd6a6;
  border-radius: 8px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #7c8265;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #b2b2b280;
  }
`
