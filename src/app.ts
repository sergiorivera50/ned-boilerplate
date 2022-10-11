import express, { Application } from 'express'

const app: Application = express()

/* Load middlewares */

import middlewares from './api/middlewares'

app.use(middlewares)

/* Load routes */

import routes from './api/routes'
import ExpressConfig from './api/configs/express.config';

app.use(`${ExpressConfig.API_ROUTE}`, routes)

/* Swagger for API documentation */

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import SwaggerConfig from './api/configs/swagger.config';

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(SwaggerConfig.options)))

/* Wildcard route: 404 */

import ExpressUtils from './api/utils/express.utils'

app.use('*', (req, res) => ExpressUtils.errorResponse(res, 'Not found', 404))

export default app
