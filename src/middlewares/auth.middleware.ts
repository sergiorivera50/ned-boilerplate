import { expressjwt as jwt } from 'express-jwt'
import AuthConfig from '../configs/auth.config'

export default class AuthMiddleware {
  static OAuth2 = jwt(AuthConfig.OAuth2)
}
