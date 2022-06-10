import { Request, Response } from 'express'
import ExpressUtils from '../utils/express.utils'

export default class RootController {
  static async apiGetRoot(req: Request, res: Response) {
    return ExpressUtils.successResponse(res, { msg: 'N.E.D. rules 😎' })
  }
}
