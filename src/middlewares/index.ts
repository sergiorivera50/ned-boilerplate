import { Router } from 'express'
import ExpressUtils from '../utils/express.utils'
import AuthMiddleware from './auth.middleware'

const middlewares = Router()

if (ExpressUtils.isProd) middlewares.use(AuthMiddleware.OAuth2)
// middlewares.use(YourCustomMiddleware.method)

export default middlewares
