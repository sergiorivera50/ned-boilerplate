import { Router } from 'express'
import { hello } from './hello.middleware'

const middlewares = Router()

middlewares.use(hello)

export default middlewares
