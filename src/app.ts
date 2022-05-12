import express, { Application } from 'express'

const app: Application = express()

import routes from './routes'

app.use(routes)

export default app
