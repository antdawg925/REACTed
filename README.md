### This application is written in JavaScript to handle the front end and the backend as well using MongoDB as the database.

### To run this application requires installing the packages required to run the Express server and React(JS)-app 
and have terminals running for the Express server and React app simultaniously. 

## ------------------------------------------- Install React Packages -------------------------------------------

### First you must install node_modules which is not posted to github because .gitignore
### To install node_modules cd into "client-master" folder and all packages required.
1. `npm i`
(i is short-cut for install)

To download packages independently or if missing.
Must install axios to make requests to Python server
1. `npm i axios`
Need to install react-router-dom which allows front end routes to work
2. `npm i react-router-dom`

Tailwind was used to customize front end, may or may need to be installed. 
3. `npm i -D tailwindcss`
4. `npx tailwindcss init`

To start React in your command shell parallel to the package.json
1. `npm start`

## ------------------------------------------- Install Server Packages -------------------------------------------

### There are only three packages required to run this server, Cors, Express, and Mongoose which can be installed automatically with npm.
1. `npm i`

### to run server in your command shell parallel to the package.json
1. `node server.js`


------------------------------------------------- MongDB -----------------------------------------------------

### Assuming you have MongoDB installed to your computer. Create an instance of a database and include the name 
### of that database in the server.js file line 5 const DB_NAME = " "


Thanks for stopping by!! :)
