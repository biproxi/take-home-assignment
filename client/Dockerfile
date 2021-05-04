FROM nginx:stable-alpine

# update packages
RUN apk update

# Create app directory
WORKDIR /usr/share/nginx/html

# Copy our code
COPY ./build .

# nginx conf for reverse proxy
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80