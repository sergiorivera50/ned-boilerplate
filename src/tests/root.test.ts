import app from '../app'
import request from 'supertest'
import { describe, it, expect} from '@jest/globals'
import ExpressConfig from '../api/configs/express.config';

const endpoint = '/'
const route = `${ExpressConfig.API_ROUTE}${endpoint}`

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
