# aj test deploy

### What is this service?


### System Requirement

- `Node.js` version `8.x.x`.
- `Mysql`

# Installation Instructions

To install all the dependencies:

```
npm install
```

To run the service:

```
node src/index.js     
```


## Dev Environment Setup


## Building your image

```
$ docker build -t node/aj .
```
Your image will now be listed by Docker:
```
$ docker images

# Example
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
node/aj             latest              119b770faec3        54 seconds ago      910MB
```

Run the image
```
$ docker run -it --rm -p 8080:8080 node/aj
```


## Deploy to AZURE
Create container registry

Push docker image to Container registry 
Ref https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli

log into registry 
```
az acr login --name <myregistry>
```

Push the image
```
docker tag <image> <containername>.azurecr.io/samples/<app>   
docker push <containername>.azurecr.io/samples/<app>  

```

Trouble shooting
Go to mysqlDatabase server -> Connection string and verify that you have used the right ones.

