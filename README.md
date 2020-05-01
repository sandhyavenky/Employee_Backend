# Employee_Backend CRUD Operation

Working Design of Backend: Express Js and AWS Dynamo DB

## Table of Contents

1 Synopsis

2 Technologies

3 Setup

4 Launch

5 Description


## Synopsis

Backend working modules for Employee Crud operation connecting with AWS Dynamo Db.

## Technologies
###### Project is created with

* VScode

###### Dependencies

* Express
* Body-parser
* AWS-SDK

## Set up

Install VS code and npm 

###### Run commands for the backend service to render ExpressJS

$ cd myapplication

$ npm init

$ npm install --save express

## Launch

$ touch index.js

###### To run the application in Express JS

$ node index.js

## Description

* Connect the Dynamo DB to the Express JS by mentioning the connection keys and URL
* In VS code of Express application, create a table "CreateEmployee" in AWS Dynamo Db
* Create main index.js in Express application and use the http methods to perform CRUD operations from React frontend to store and make changes in AWS
* Design the front end in React.js in the IDE VScode
* Use API calls which connects to the Express which is inturn connected to AWS Dynamo DB
