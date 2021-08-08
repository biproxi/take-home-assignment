FROM node:14.15.4

COPY package*.json ./

RUN npm install

COPY ./ ./
COPY tsconfig.json ./tsconfig.json

CMD [ "npm", "run", "start" ]