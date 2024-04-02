# Elanco API
## Introduction
This repository is the API for the User Interface, this api allows to query specific data from the SQL database to an endpoint where it will then be displayed in an express page. This will then allow the front-end to access the specific data for renderring on the UI. 

User Interface: https://github.com/ELias020Ali/Elanco-UI

### Techstack
SQLite | Node.JS | Express.JS

## Prerequisites
Download and setup the applications below

DB Browser for SQLite:  https://sqlitebrowser.org/dl/

Node.JS:  https://nodejs.org/en/download

## Instructions
1. Once you have set everything up, open the terminal in Vscode type in
   ```
   npm install
   ```
2. Run This:
   ```
   npx nodemon ./bin/www.js
   ```
2. Once that is complete, go on to your preferred browser and type into the url:
   ```
   http://localhost:4000
   ```
3. You should then see the express page with all the endpoints visible, to further check the functionality you can copy the endpoints and add it into the url with the localhost:4000:
   ```
   http://localhost:4000/endpointname
   ```
