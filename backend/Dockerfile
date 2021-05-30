FROM node:latest
USER root
WORKDIR /home/node/app
COPY ./package.json ./
RUN chmod 770 ./package.json
COPY ./tsconfig.json ./
COPY ./docker-config.ini ./config.ini
COPY ./source ./source
RUN npm i --production
RUN npm run build:prod
CMD npm run start:prod
EXPOSE 4000