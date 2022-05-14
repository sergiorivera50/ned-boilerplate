import { Router } from 'express'
import { auth } from './auth.middleware'

const middlewares = Router()

// middlewares.use(auth)  // edit auth.config.ts & uncomment this line

export default middlewares
