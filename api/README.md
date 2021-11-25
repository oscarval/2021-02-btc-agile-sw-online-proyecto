GeeksHubs Agile Practice Final (Backend) - Vending machine with server express API with CRUD on Mongodb

## Features

In this practice we will use nodejs, express and moongose to create API with CRUD, connected with Mongodb

## Requirements

Install docker and docker-compose in local machine

Firstly, run `npm install` to install all dependencies<br />

## Build

Please, run `npm run clean` to clena dist folder<br />
After, run `npm run start` to launch app<br />

## Available Scripts

In the project directory, you can run:

## `npm run start`

Run script `npm run prebuild`, `npm run build`, `npm run prestart` and start the application<br />

## `npm run prebuild`

Check tslint and validate typescript<br />

## `npm run build`

Transpile code of typescript.<br />

## `npm run prestart`

Builds the app for production to the `dist` folder.<br />

## `npm run test`

Run unit test (with jest)<br />

## Test

The data of products, load automatically in the mongoDB when start the app.

### Requirements

For launch the tests, is necessary up the docker of mongo
Please, firstly, run the next command `docker-compose up --build`<br />
After, run the command `npm run test`
