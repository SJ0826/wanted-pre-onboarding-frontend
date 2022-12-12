import styled from 'styled-components'
import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthInput from '../components/auth/AuthInput'
import { UserParam, validationParam } from '../../lib/interface/userInterface'
import getValidation from '../../lib/utils/getValidation'
import { signUpAPI } from '../../lib/api/auth/signUp'

const SignIn = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState<UserParam>({ email: '', password: '', passwordCheck: '' })
  const [validation, setValidation] = useState<validationParam>({ email: false, password: false, passwordCheck: false })

  const onChangeInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target
      let regexp = false
      if (id === 'passwordCheck') {
        regexp = user.password === value
      }
      if (id !== 'passwordCheck') {
        regexp = getValidation(id as keyof Omit<UserParam, 'passwordCheck'>, value)
      }
      setUser({ ...user, [id]: value })
      setValidation({ ...validation, [id]: regexp })
    },
    [user, validation],
  )

  const onClickSignUp = useCallback(async () => {
    try {
      const userData = { email: user.email, password: user.password }
      await signUpAPI(userData)
      navigate('/')
    } catch {
      alert('존재하는 이메일 입니다.')
    }
  }, [user, validation])

  const isValidation = useMemo(
    () => !(validation.email && validation.password && validation.passwordCheck),
    [validation],
  )

  return (
    <Container>
      <Title>회원가입</Title>
      <AuthInput
        label="Email"
        id="email"
        type="email"
        value={user.email}
        onChange={onChangeInputValue}
        error={{ isError: validation.email, message: '올바른 이메일 형식으로 입력해 주세요 (ex. example@example.com)' }}
      />
      <AuthInput
        label="Password"
        id="password"
        type="password"
        value={user.password}
        onChange={onChangeInputValue}
        error={{ isError: validation.password, message: '비밀번호를 8자 이상 입력해주세요' }}
      />
      <AuthInput
        label="PasswordCheck"
        id="passwordCheck"
        type="password"
        value={user.passwordCheck}
        onChange={onChangeInputValue}
        error={{ isError: validation.passwordCheck, message: '비밀번호가 일치하지 않습니다' }}
      />
      <SignInButton disabled={isValidation} onClick={onClickSignUp}>
        Sign Up
      </SignInButton>
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
