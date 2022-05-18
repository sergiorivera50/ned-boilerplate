import { Router } from 'express'
import { isProd } from '../utils/misc.utils'
import { auth } from './auth.middleware'

const middlewares = Router()

if (isProd) middlewares.use(auth)  // auth.config.ts

export default middlewares
