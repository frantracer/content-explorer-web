# Prepare general environment

Create docker images:

`sudo su`

`docker build -f Dockerfile-web -t content-explorer-web:latest .`

`docker create -it --name content-web-container -p 8080:80 -p 8443:443 -v $(pwd):/usr/src/app content-explorer-web /bin/bash`

# Development environment

Launch container

`docker start -i content-web-container`

`npm install`

`npm start`

The web will be available at:

http://localhost:8080

# Production environment

Launch container

`docker start -i content-web-container`

Deploy the project in github.io

`npm run deploy`

The web will be available at:

https://frantracer.github.io/content-explorer/
