import express, { Application } from 'express'

const app: Application = express()

import middlewares from './middlewares'
import routes from './routes'

app.use(middlewares)
app.use(routes)

export default app
