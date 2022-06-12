import { Router } from 'express'
import RootController from '../controllers/root.controller'

const rootRoutes = Router()

rootRoutes.route('/')
  /**
   * @openapi
   * /:
   *  get:
   *    description: Root route
   *    responses:
   *      200:
   *        description: Returns a greeting line as a message
   */
  .get(RootController.apiGetRoot)

export default rootRoutes
