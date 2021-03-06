import { useState, useCallback } from 'react'
import { createRequest } from './use-request'
import { useClient } from './context'

export const useMutation = query => {
    console.log(query)
  const client = useClient()
  const [state, setState] = useState({
    fetching: false
  })

  const executeMutation = useCallback(
    variables => {
      const request = createRequest('mutation', query, variables)
      setState(res => ({ ...res, fetching: true }))

      return new Promise((resolve, reject) => {
        client.execute(request, result => {
          setState({ ...result, fetching: false })
          resolve(result)
        })
      })
    },
    [query, client]
  )

  return [state, executeMutation]
}
