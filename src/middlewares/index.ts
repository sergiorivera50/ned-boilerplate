import { Router } from 'express'
import { isProd } from '../utils/misc.utils'
import AuthMiddleware from './auth.middleware'

const middlewares = Router()

if (isProd) middlewares.use(AuthMiddleware.OAuth2)

export default middlewares
