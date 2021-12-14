## Available Scripts

## Usage

This is the Goldeneye game app.

You can load it by going to the https://pedantic-fermi-2c8c7f.netlify.app/ URL or by cloning the repo and running it in localhost:3000.
To run it on localhost go on a Terminal and type in "npm run start" in the root folder, and click Enter.

Once you are in the app, you will see a table with attributes of players. The list of players will load automatically, you have to wait for a couple of seconds. After this you can search for a keyword and display the players that match that keyword in their nickname.
To go back and show all of the original players, click on the "View all players" button.

You can also use the pagination by going to the bottom of the app and clicking on Next or Previous, switching pages right and left.

To run the unit tests, go into the src folder and type in /n 
npm test -- Search.test.js /n
npm test -- Pagination.test.js /n
npm test -- Table.test.js /n

For the end to end tests, download Cypress by running the following command in the root folder.
"npm install cypress --save-dev"

Also you will have to start a localhost version of the app typing in the root folder "npm run start", and leave it running in localhost:3000

In the root folder, go into the src folder.
Then type in "npx cypress open"

This will open a window where you have to click on home_page_spec.js in order to run the end to end tests.

---------

In order to continue developing over the existing solution, you can clone the repo and work on the files.
Hoc.js is the high order component, where the components are contained (Search, Pagination, Table, Logo).
So in the src folder of this project you can create new components and include them in the Hoc.js file.

In regards to CSS changes, everything is in the App.css file. 
There you can edit the CSS for the different components and elements.

When downloading the repo from scratch, run
npm run build -
and then
npm run start

The app will start locally in localhost:3000.
There you can make changes and work on the app, before deploying it on netlify, heroku or another medium.

Some of the commands that you will be able to use in your computer are the following:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
