# Streaming UI

A front end for live streaming of events using YouTube.

## Design

This has two halves:

* A frontend component written using React, which contains the UI of the application (this repository)

* A backend component written using Python, which generates all the data consumed by the React UI. (written by @micolous)

The entire website can be hosted using a static web server.  This could also probably moved to some cloud file storage system, provided that it is possible to expire the objects within reasonable timeframes.

## Setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

## References

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Please check there for more information on the structure used and what options are available.
