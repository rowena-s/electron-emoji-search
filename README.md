This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using the code from [emoji search](https://github.com/ahfarmer/emoji-search) as a base.

The accompanying backend server can be found at [emoji-search-server](https://github.com/rowena-s/emoji-search-server/)


#### Before running the project for the first time
run `npm install` to install all the dependency packages for this project

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


#### `electron .`

Requires the webserver to be running via `npm start` beforehand. This will wrap the web app running at port 3000 in an electron window and make it look like a native app.


#### Notes
File upload functionality is still in progress. The following things are in the pipeline

*  Success message on file upload.
*  Backend server to handle uploaded files
*  Moving existing images to be stored on a local server rather than being fetched from a cloud server.
*  Ability to persist uploaded emoji in the database.
