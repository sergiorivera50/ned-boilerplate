import express, { Application } from 'express'

const app: Application = express()

import middlewares from './middlewares'
import routes from './routes'
import ExpressUtils from './utils/express.utils'

app.use(middlewares)
app.use(`${ExpressUtils.API_ROUTE}`, routes)
app.use('*', (req, res) => ExpressUtils.errorResponse(res, 'Not found', 404))

export default app
