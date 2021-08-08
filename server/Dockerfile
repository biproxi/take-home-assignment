FROM node:14.15.4

COPY package*.json ./

RUN npm install

COPY ./ ./
COPY tsconfig.json ./tsconfig.json

RUN npm run build
COPY ./dist ./dist
CMD [ "npm", "run", "start" ]