import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { GlobalStyles } from './layout/global-styles'
import { Client } from './lib/client'
import { Context } from './lib/context'

const client = new Client('https://threed-test-api.herokuapp.com/graphql')

ReactDOM.render(
  <Context.Provider value={client}>
    <GlobalStyles />
    <App />
  </Context.Provider>,
  document.getElementById('root')
)
