import { Response } from 'express'

export default class ExpressUtils {
  static isDev = process.env.NODE_ENV === 'development'
  static isProd = process.env.NODE_ENV === 'production'

  static errorResponse (res: Response, msg: any, statusCode: number = 500) {
    return res.status(statusCode).json({ success: false, error: msg })
  }

  static successResponse (res: Response, data: any, statusCode: number = 200) {
    return res.status(statusCode).json({ success: true, ...data })
  }
}
