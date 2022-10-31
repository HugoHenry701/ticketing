# ticketing

Project Name: Ticketing
NodeJS Microservices 2022

## Technology

- **NodeJS**
- **Typescript**
- **Docker**
- **Kubernetes**
- **Skaffold**
- **Ingress-nginx**
- **MongoDB**
- **Jest**
- **NAST Streaming**

## JEST - Testing Framework

**NOTE:**

- JEST is framework designed for Javascript testing, therefore sometimes it doesn't relize the changes of typescript files. At that point, you should restart Jest to continue the testing job.
- In microservices, we will process the testing isolated with each Service before deploy it. Therefore, we will write the test case in each Service to run the automation test.

## Getting started

**Install packages in each service**

```
cd /auth

npm install
```

**After install package in each service, we will run skaffold for start automatic deploy process**

```
cd ..

skaffold dev
```
