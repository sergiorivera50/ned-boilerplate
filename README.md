# N.E.D. boilerplate

A lightweight yet powerful boilerplate for developing modern RESTful APIs with Node.js & Express 😎

![nodejs + docker logo](.github/asset.png)

Features:

- **TypeScript**: supported by default (as it should be).
- **Express API**: routes, middlewares, services and configs.
- **Unit tests**: with Jest and Supertest for ease of use.
- **OAUTH 2.0**: boilerplate config + middleware for authenticated requests.
- **Docker**: dockerized development environment + production grade image.
- **ESLint**: with recommended rules for enforcing a cohesive coding style.

In order to start developing your REST API simply run:

```bash
npm run docker:dev
```

To build (and push) the production Docker image use:

```bash
docker buildx build --platform linux/arm64 -t <username|organization>/<repository> --push .
```
