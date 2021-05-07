FROM nginx:stable-alpine

# update packages
RUN apk update

# Create app directory
WORKDIR /usr/share/nginx/html

# Copy our code
COPY ./build .

# nginx conf and keys for reverse proxy (obviously wouldn't store real keys like this)
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/localhost.key /etc/ssl/private/localhost.key
COPY ./nginx/localhost.crt /etc/ssl/certs/localhost.crt

EXPOSE 80
EXPOSE 443
