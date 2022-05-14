import { expressjwt as jwt } from 'express-jwt'
import { OAUTH2 } from '../configs/auth.config'

export const auth = jwt(OAUTH2)
