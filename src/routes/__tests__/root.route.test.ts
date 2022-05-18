import app from '../../app'
import request from 'supertest'

describe("GET /", () => {
  it("should return status code 200", async () => {
    await request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect(200)
  })

  it("should return greeting line", async () => {
    const response = await request(app)
      .get("/")
      .set("Accept", "application/json")
    expect(response.body).toEqual("N.E.D. rules 😎")
  })
})
