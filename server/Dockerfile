FROM node:14.15.4

#WORKDIR /app/


COPY package.json ./


RUN npm i

COPY . ./
#COPY tsconfig.json ./app/tsconfig.json

#RUN npm run build
#COPY ./dist ./dist#
CMD ./start.sh