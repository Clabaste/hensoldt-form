import { setupWorker } from 'msw/browser'
import { rest } from 'msw'
import { handlers } from './handlers'

const worker = setupWorker(...handlers)
worker.start()

export { worker }
