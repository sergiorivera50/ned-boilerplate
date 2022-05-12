# N.E.D. boilerplate

A simple yet powerful boilerplate for developing modern REST APIs with Node.js & Express 😎

It includes:

- **TypeScript**: supported by default (as it should be).
- **Express API**: routes, middlewares, services and configs.
- **Unit tests**: with Jest and Supertest.
- **Dockerfile**: production grade Docker image for deploying your API.

**Development process**

In order to start developing your REST API simply run:

```bash
npm run dev
```

**Deployment strategy**

To build (and push) the production image of your final product use:

```bash
docker buildx build --platform linux/arm64 -t <username|organization>/<repository> --push .
```
