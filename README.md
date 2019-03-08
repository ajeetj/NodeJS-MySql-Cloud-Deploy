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

1. Create "Web App for Containers + MySql"

   `Search the Web App`
   <img alt="Create Web App" src="https://github.com/ajeetj/NodeJS-MySql-Cloud-Deploy/blob/master/src/img/search-web-app.png" width="400">

   `Create Web App`
   <img alt="Create Web App" src="https://github.com/ajeetj/NodeJS-MySql-Cloud-Deploy/blob/master/src/img/create-web-app+mysql.png" width="200">
 
    
1. Inside "Configure Container" click on "Azure Container Registry" and select the image that you just uploaded.
   <img alt="Create Web App" src="https://github.com/ajeetj/NodeJS-MySql-Cloud-Deploy/blob/master/src/img/configure-container.png" width="300">

1. After entering all the details click on "Create"

1. This will take few mins and will launch all the resources. 

1. Go to the App Server & Set env fields in Application Settings. 

   <img alt="Setting env variables" src="https://github.com/ajeetj/NodeJS-MySql-Cloud-Deploy/blob/master/src/img/env-var.png" width="400">
   Restart the app if the variable are not propogated right away. 

1. Naviate to "Overview" and copy the URL of that app. Now your app should be live. 
   Check the two routes that we have added. 
   <URL>/status
   <URL>/tasks

#### Trouble shooting
1. Navigate to "Log Stream" if the APP is not up. Check for the errors.
1. You can get MySQL settings from "Application Settings" -> "Connection Strings" 


### Continous Delivery

1. Click on "Deployment Center" inside your App Service. 

   <img alt="Setting env variables" src="https://github.com/ajeetj/NodeJS-MySql-Cloud-Deploy/blob/master/src/img/configure-continuous-delivery.png" width="300">

1. Select "Github" in "Source Code". 
   You will have to authenticate with your github account.

1. Set rest of the parameters and click "OK".

1. Give it a few mins and you are all set. If you push anything in your master branch it will be automatically deployed to your App Service. 


