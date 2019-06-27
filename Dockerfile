FROM node:10-alpine

WORKDIR /usr/src/app

EXPOSE 80 443

# Compile web
COPY . /usr/src/app
RUN npm install
RUN npm run build

# Install and configure nginx
RUN apk update && apk upgrade && apk add nginx
RUN mkdir -p /run/nginx

COPY goods/nginx.conf /etc/nginx/nginx.conf

RUN ln -s /usr/src/app/build /var/www/html

# Create external configuration directory
RUN mkdir -p /etc/linkurator/config

# Launch nginx
CMD nginx
