import { createContext, useContext } from 'react'
import { Client } from './client'

export const Context = createContext(
  new Client('/graphql')
)
export const useClient = () => useContext(Context)
