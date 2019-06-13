# Prepare general environment

Create docker images:

`sudo su`

`docker build -t content-explorer-web:latest .`

`docker create -it --name content-explorer-web -p 8080:80 -p 8443:443 -v $(pwd):/usr/src/app content-explorer-web /bin/bash`

# Development environment

Launch container

`docker start -i content-explorer-web`

`npm install`

`npm start`

The web will be available at:

http://localhost:8080
