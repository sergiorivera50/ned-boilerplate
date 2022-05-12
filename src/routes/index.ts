import { Router } from 'express'
import { root } from './root.route'

const routes = Router()

routes.get('/', root)

export default routes
