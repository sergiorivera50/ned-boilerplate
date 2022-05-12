import { Request, Response, NextFunction } from 'express'

export const hello = (req: Request, res: Response, next: NextFunction) => {
  console.log("Hello from middleware 👋")
  next()
}
