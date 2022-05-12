import { Request, Response } from 'express'
import { NED_CONF } from '../configs/ned.config'

export const root = async (req: Request, res: Response) => {
  res.status(200).json(NED_CONF.rootRouteMsg).end()
}
