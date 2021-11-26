GeeksHubs Agile Practice Final (Frontend)- Vending machine with server express API with CRUD on Mongodb

## Features

In this practice we will use ReactJs to create showcase of vending machine
Also, I will use, in back, server express to create API with CRUD connect its with Mongodb

Furthermore, This practices used TDD and BDD with jest (unit test) and cypress (test End to End).

Also, we apply SOLID principles to develop.

## Requirements

Install docker and docker-compose in local machine

Firstly, run `npm install` to install all dependencies<br />

## Build

Please, firstly, run the next command `docker-compose up --build` to up server express and mongo server<br />
After, please, run `npm run start` to lauch the app<br />

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, only on sheetstyle files or javascript files.
If you do some modification in html, please reload the browser page

### `npm run build`

Builds the app for production to the `dist` folder.<br />

### `npm clean`

Delete folder `dist`<br />
IMPORTANT: if you SO is windows, please replace in package.json the line scripts->clean to `rd dist`

### `npm test`

Launch the e2e test with cypress<br />

#### Requirements

In necessary to run the api project to test it<br />
Please, firstly, run the command `cd ..` and after run the command`docker-compose up --build` to up app, api and mongo server, waiting to up all services. Finally launch the tests with thez command `npm run test`
