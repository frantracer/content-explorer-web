# Prepare project

Download project

```
export APP=content-explorer-web
git clone https://github.com/frantracer/$APP
```

Create directory with the following files:

```
- config
|- cert.pem
|- key.pem
|- web.env
```

Build docker image

```
cd $APP
cp ../config/web.env .env
sudo docker build -t $APP:latest .
```


# Development environment

Create container and run the container

`sudo docker run -it --name $APP -v $(pwd)/../config:/etc/linkurator/config -v $(pwd):/usr/src/app -p 8080:80 -p 8443:443 $APP /bin/sh`

Download packages

`npm install`

Copy certificates and configuration for web service

```
cat /etc/linkurator/config/key.pem /etc/linkurator/config/cert.pem > ./node_modules/webpack-dev-server/ssl/server.pem
```

Start application

`npm start`

The web will be available at:

https://localhost:8443


# Production environment

Create and launch container

`sudo docker run -d --name $APP -v $(pwd)/../config:/etc/linkurator/config -p 8080:80 -p 8443:443 $APP`
