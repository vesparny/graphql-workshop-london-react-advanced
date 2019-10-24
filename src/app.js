import React, { Fragment } from 'react'
import styled from 'styled-components'
import Header from './layout/header'
import Home from './modules'

const Wrapper = styled.div`
  min-height: 100%;
  padding: 8px 16px;
  background-color: #f6f6ef;
`

const App = () => (
  <Fragment>
    <Header />
    <Wrapper>
      <Home />
    </Wrapper>
  </Fragment>
)

export default App
