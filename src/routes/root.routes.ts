import { Router } from 'express'
import RootController from '../controllers/root.controller'

const rootRoutes = Router()

rootRoutes.route('/')
  .get(RootController.apiGetRoot)

export default rootRoutes
