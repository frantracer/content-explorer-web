# Content Explorer

This project is a website to categorize and recommend youtube videos to your friends.

<img src='images/example.png' width='500'/>

# Installation

## Prepare project

Download project

```
git clone https://github.com/frantracer/content-explorer-web
```

Create directory with the following files:

```
- config
|- cert.pem
|- key.pem
|- web.env
```

Install docker (https://docs.docker.com/install/)


## Development environment

Run the following command and follow instructions:

```
python deploy.py --config ../config/ --env DEV
```

The web will be available at:

https://localhost:8443


## Production environment

Run the following command:

```
python deploy.py --config ../config/ --env PRO
```