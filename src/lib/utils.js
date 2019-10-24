import { CombinedError } from './combined-error'

const fallback = sendResult => operation => {
  if (operation.operationName !== 'teardown') {
    sendResult({
      operation,
      data: undefined,
      error: new CombinedError({
        networkError: new Error('Unhandled Operation')
      })
    })
  }
}

export const composeExchanges = (client, exchanges) => {
  return exchanges.reduceRight((inner, exchange) => {
    return exchange({ client, forward: inner })
  }, fallback)
}
