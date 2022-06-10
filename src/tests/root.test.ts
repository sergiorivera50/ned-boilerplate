import app from '../app'
import request from 'supertest'
import { describe, it, expect} from '@jest/globals'
import ExpressUtils from '../utils/express.utils'

const endpoint = '/'
const route = `${ExpressUtils.API_ROUTE}${endpoint}`

describe(`GET ${route}`, () => {
  it('should return status code 200', async () => {
    const response = await request(app)
      .get(route)
      .set('Accept', 'application/json')
    expect(response.statusCode).toBe(200)
  })

  it('should return greeting line', async () => {
    const response = await request(app)
      .get(route)
      .set('Accept', 'application/json')
    expect(response.body.msg).toBeDefined()
    expect(response.body.msg).toEqual('N.E.D. rules 😎')
  })
})
