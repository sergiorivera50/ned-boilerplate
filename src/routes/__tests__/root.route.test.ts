import app from '../../app'
import request from 'supertest'
import { describe, it, expect} from '@jest/globals'

describe('GET /', () => {
  it('should return status code 200', async () => {
    await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
  })

  it('should return greeting line', async () => {
    await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect((res) => {
        expect(res.body).toEqual({acknowledged: 'N.E.D. rules 😎'})
      })
  })
})
