# Partially from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:14-alpine

# update packages
RUN apk update

# Create app directory
WORKDIR /opt/todo-app

# Copy build
COPY ./build .

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

EXPOSE  8080

# Start command
CMD [ "node", "server.js" ]