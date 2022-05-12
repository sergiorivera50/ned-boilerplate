import { Router } from 'express'
import { hello } from './hello.middleware'

const middlewares = Router()

/* 
  Add your custom middlewares here:
  middlewares.use(myMiddleware)
*/

middlewares.use(hello)

export default middlewares
