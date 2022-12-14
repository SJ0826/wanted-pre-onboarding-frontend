import { ChangeEvent, memo, useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import AuthInput from '../components/auth/AuthInput'
import { UserParam, validationParam } from '../../lib/interface/userInterface'
import getValidation from '../../lib/utils/getValidation'
import { signInAPI } from '../../lib/api/auth/signIn'

const SignIn = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<Omit<UserParam, 'passwordCheck'>>({ email: '', password: '' })
  const [validation, setValidation] = useState<Omit<validationParam, 'passwordCheck'>>({
    email: false,
    password: false,
  })

  const onChangeInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target
      setUser({ ...user, [id]: value })
      const regexp = getValidation(id as keyof Omit<UserParam, 'passwordCheck'>, value)
      setValidation({ ...validation, [id]: regexp })
    },
    [user.email, user.password],
  )

  const onClickSignIn = useCallback(async () => {
    try {
      const userToken = await signInAPI(user)
      localStorage.setItem('token', userToken.data.access_token)
      alert('로그인 되었습니다')
      navigate('./todo')
    } catch {
      alert('존재하는 계정이 아닙니다. 다시 로그인 해주세요.')
    }
  }, [user])

  const onClickSignUp = useCallback(() => navigate('./signup'), [])

  const isValidation = useMemo(
    () => !(validation.email && validation.password),
    [validation.email, validation.password],
  )

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/todo')
  })

  return (
    <Container>
      <Title>로그인</Title>
      <AuthInput label="Email" id="email" type="email" value={user.email} onChange={onChangeInputValue} />
      <AuthInput label="Password" id="password" type="password" value={user.password} onChange={onChangeInputValue} />
      <SignInButton disabled={isValidation} onClick={onClickSignIn}>
        Sign In
      </SignInButton>
      <SignUpContainer>
        계정이 없으시다면 <SignUpLink onClick={onClickSignUp}>회원가입</SignUpLink>을 먼저 진행해주세요.
      </SignUpContainer>
    </Container>
  )
}

export default memo(SignIn)

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

const SignUpContainer = styled.div`
  margin-top: 20px;
`
const SignUpLink = styled.span`
  &:hover {
    cursor: pointer;
  }
  color: #7c8265;
`
