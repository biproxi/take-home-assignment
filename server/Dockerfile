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

EXPOSE  8081

# Start command
CMD [ "npm", "run", "docker-start" ]