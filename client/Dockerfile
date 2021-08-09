FROM node:14.15.4

#COPYWORKDIR /app

COPY package.json ./
#COPY package-lock.json ./app/

RUN npm i

COPY . ./

CMD [ "npm", "run", "start" ]