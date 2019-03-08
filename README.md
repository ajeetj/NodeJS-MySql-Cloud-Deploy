# Sample web app to test cloud deploy

### What is this service?
This sample service lets you deploy in cloud and give exposure to different services. 

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


### Building your image

Build a docker image
```
$ docker build -t node/tasks .
```

Your image will now be listed by Docker:
```
$ docker images

# Example
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
node/tasks          latest              119b770faec3        54 seconds ago      910MB
```

Run this image locally
```
$ docker run -it --rm -p 8080:8080 <image id>
$ docker run -it --rm -p 8080:8080 \
-e DB_HOST='<database host url>' \
-e DB_USER='<database username>' \
-e DB_PASSWORD='<database password>' \
-e DB_NAME='<database name>' \
<image id>
```


## Deploy to AZURE

### Manual deployment
1. Signup to Microsoft Azure free account 
1. Create container registry
Ref https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli

1. Push docker image that you created to Container registry 
    log into az CLI 
    ```
    az acr login --name <containerName>
    ```

    Push the image
    ```
    docker tag <image id> <containerName>.azurecr.io/<image name>   
    docker push <containerName>.azurecr.io/<image name>  

    ```
1. Verify that your image is visible in `Container registry -> Repositories`

1. Create Web App with MySql
 -- details

1. Set env fields in Application Settings
<img alt="Setting env variables" src="https://github.com/ajeetj/NodeJS-MySql-Cloud-Deploy/blob/master/src/img/env-var.png" width="150">


Trouble shooting
Go to mysqlDatabase server -> Connection string and verify that you have used the right ones.

