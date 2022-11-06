# insurance-app

To have the app running, a brief configuration must be done and some scripts must be run from both 'back' and 'front' directories.

## Environment variables
A '.env' file must be created inside the 'back' and 'front' folders. The first one must contain values for the front-end url ('FRONT') and the port the server is going to use ('PORT'). For instance:

`FRONT=http://localhost:3000`

`PORT=5000`

The one inside the front folder must contain a value for the server url (REACT_APP_API_URL). For example:

`REACT_APP_API_URL=http://localhost:5000`

## Available Scripts

In both 'back' and 'front' directories, you must run:

### `npm install`

Installs all the necessary dependencies for the app to run correctly.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) -or the URL you set in the FRONT .env variable- to view it in your browser.

