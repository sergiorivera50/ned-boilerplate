# N.E.D. boilerplate

A simple yet powerful boilerplate for developing modern REST APIs with Node.js & Express 😎

It includes:

- **TypeScript**: supported by default (as it should be).
- **Express API**: routes, middlewares, services and configs.
- **Unit tests**: with Jest and Supertest for ease of use.
- **Dockerfile**: production grade Docker image + PM2 for deploying your API.

In order to start developing your REST API simply run:

```bash
npm run dev
```

To build (and push) the production Docker image use:

```bash
docker buildx build --platform linux/arm64 -t <username|organization>/<repository> --push .
```
