ARG PORT=8000

FROM node:17-alpine AS node

LABEL maintainer="your@email.com"

# |== Builder stage ==| #

FROM node AS builder

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Install apk dependencies
RUN apk add curl g++ make

# Use /app as the project directory
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install all dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Invoke the build script to transpile code to js
RUN npm run build

# Open desired port
EXPOSE ${PORT}

# Run development server
CMD [ "npm", "run", "dev" ]

# |== Final stage ==| #

FROM node as final

# Set node environment to production
ENV NODE_ENV production

# Update the system
RUN apk --no-cache -U upgrade

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Install apk dependencies
RUN apk add g++ make

# Prepare destination directory and ensure user node owns it
RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app

# Change directory to project folder
WORKDIR /home/node/app

# Install PM2
RUN npm i -g pm2

# Copy package.json, package-lock.json and process.yml with right permissions
COPY --chown=node:node package*.json process.yaml ./

# Copy entrypoint and give permissions
COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

# Switch to node user
USER node

# Install only production dependencies
RUN npm i --only=production

# Copy js files and change ownership to node user
COPY --chown=node:node --from=builder /app/dist ./dist

# Open desired port
EXPOSE ${PORT}

# Use PM2 to run the application
CMD ["/docker-entrypoint.sh"]  
