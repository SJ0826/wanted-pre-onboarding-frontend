import React from 'react'
import styled from 'styled-components'
import Page from './Page'

interface Props {
  children?: React.ReactNode
  [k: string]: any
}

export default function Layout({ children, ...props }: Props) {
  return (
    <Page>
      <Container {...props}>
        <div>{children}</div>
      </Container>
    </Page>
  )
}

const Container = styled.main`
  position: absolute;
  width: 100vw;
  max-width: 720px;
  height: 100vh;
  max-height: 620px;
  background-color: #fffbe9;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 1px 1px #999;
`
