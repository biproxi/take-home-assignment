FROM node:12-alpine
 WORKDIR /todo
 COPY . .
 RUN npm install
 RUN ["apt-get", "-y", "install", "vim"]
 RUN npm run build

 EXPOSE 3005
 CMD ["npm", "run", "start"]