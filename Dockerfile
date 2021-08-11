FROM node:lts-alpine AS deps
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000

CMD ["npm", "run", "start"]