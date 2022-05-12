import { Request, Response } from 'express'

export const root = async (req: Request, res: Response) => {
  res.status(200).json("N.E.D. rules 😎").end()
}
