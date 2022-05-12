import { Router } from 'express'
import { root } from './root.route'

const routes = Router()

/* 
  Add your custom routes here:
  routes.get(myRoute)
*/

routes.get('/', root)

export default routes
