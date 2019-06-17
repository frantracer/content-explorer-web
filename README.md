# Prepare project

Download project

`git clone https://github.com/frantracer/content-explorer-web`

Set server configuration and keys in .env file

# Development environment

Build docker image

`docker build --build-arg PROJECT_ENV=DEV -t content-explorer-web:latest .`

Create container

`docker create -it --name content-explorer-web -p 8080:80 -p 8443:443 -v $(pwd):/usr/src/app content-explorer-web /bin/bash`

Start and attach to the container

`docker start -i content-explorer-web`

Download packages

`npm install`

Start application

`npm start`

The web will be available at:

http://localhost:8080

# Production environment

Build docker image

`docker build -t content-explorer-web:latest .`

Create and launch container

`docker run -d --name content-explorer-web -p 8080:80 -p 8443:443 content-explorer-web`
