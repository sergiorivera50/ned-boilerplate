/* 
  Here you specify the JWT authentication configuration.
  Make sure to properly hide your secrets and never expose
  them in unencrypted plain text. The example shown is a 
  boilerplate for enabling OAUTH 2.0 with auth0.

  For more info see: 
    https://www.npmjs.com/package/express-jwt
    https://github.com/auth0/node-jwks-rsa
*/

import jwks from 'jwks-rsa'

export default class AuthConfig {
  static OAuth2: any = {
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://your-tenant.zone.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://your.hosted.api',
    issuer: 'https://your-tenant.zone.auth0.com/',
    algorithms: ['RS256']
  }
}
