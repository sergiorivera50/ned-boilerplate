import { Request, Response } from 'express'
import ExpressUtils from '../utils/express.utils'
import { Log } from '../utils/logging.utils'

export default class RootController {
  static async apiGetRoot(req: Request, res: Response) {
    Log.info('Someone called the root route', { route: 'root' })
    return ExpressUtils.successResponse(res, { msg: 'N.E.D. rules 😎' })
  }
}
