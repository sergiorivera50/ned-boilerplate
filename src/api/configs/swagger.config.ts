import swaggerJSDoc from 'swagger-jsdoc';
import ExpressConfig from './express.config';

export default class SwaggerConfig {
  static options: swaggerJSDoc.Options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      servers: [{ url: ExpressConfig.API_ROUTE }],
      info: {
        version: 'v1',
        title: 'Express API',
        description: 'A REST API built in Node.js using the N.E.D. boilerplate.',
        contact: {
          name: 'your@email.com'
        }
      }
    },
    apis: ['./src/**/*.ts']
  }
}