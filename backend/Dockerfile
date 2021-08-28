FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install
RUN npm install -g ts-node

COPY . .

COPY ormconfig.json ./

EXPOSE 4000
CMD ts-node index.ts