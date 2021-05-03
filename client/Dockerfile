FROM nginx:stable-alpine

# update packages
RUN apk update

# Create app directory
WORKDIR /usr/share/nginx/html

# Copy our code
COPY ./build .

EXPOSE 80