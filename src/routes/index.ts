import { Router } from 'express'
import rootRoutes from './root.routes'

const routes = Router()

routes.use('/', rootRoutes)
// routes.use('/app', yourCustomRoutes)

export default routes
