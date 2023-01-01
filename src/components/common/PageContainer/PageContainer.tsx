import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface PageContainerProps {
  children?: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <Container>{children}</Container>
  )
}

const Container = styled.div`
  padding: 40px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default PageContainer