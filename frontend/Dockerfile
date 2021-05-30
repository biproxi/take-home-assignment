FROM node:latest
USER root
WORKDIR /home/node/app
COPY ./package.json ./
RUN chmod 770 ./package.json
COPY ./tsconfig.json ./
COPY ./src ./src
COPY ./public ./public
RUN npm i --production
CMD npm run start
EXPOSE 3000