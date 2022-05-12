import { Request, Response, NextFunction } from 'express'
import { NED_CONF } from '../configs/ned.config'

export const hello = (req: Request, res: Response, next: NextFunction) => {
  console.log(NED_CONF.helloMiddlewareMsg)
  next()
}
