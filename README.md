Innowise Internship Task #5 - Front-end JS Developer
This is the repository for task #5 of the Innowise Internship for front-end JS developer. The task involved building a calculator application using JavaScript and implementing the Command pattern. The full task details can be found in the task description file.

How to run the app
There are two ways to run the application:

Method 1 - Open root directory
Open the root directory of the project.
Launch index.html.
Method 2 - Open dist directory
Open the dist directory.
Launch index.html.
Directory structure
The project directory has the following structure:

├── dist/
│   ├── bundle.js
│   ├── index.html
│   └── styles.css
├── src/
│   ├── calculator.js
│   ├── commands.js
│   ├── const.js
│   ├── handler.js
│   └── index.js
├── __test__/
├── .gitignore
├── package.json
├── package-lock.json
└── webpack.config.js

The dist directory contains the compiled files for deployment:
bundle.js: The minified and optimized JavaScript file.
index.html: The minified HTML file.
styles.css: The CSS styles for the application.
The src directory contains the JavaScript files with the logic of the application:
calculator.js: The main calculator class.
const.js: Contains constants and methods used by the calculator.
commands.js: Contains the command classes for implementing the Command pattern.
handler.js: Contains the handler for buttons.
index.js: The rendering and importing of other files. The entry point for Webpack.
Other root files:
.gitignore: Specifies files and directories that should not be tracked by git.
package.json: Contains metadata about the project, including dependencies and scripts.
package-lock.json: A file that locks the versions of the project's dependencies.
webpack.config.js: The configuration file for Webpack.
The __test__ directory contains Jest tests for the application.
Dependencies
The project has the following dependencies:

webpack
webpack-cli
webpack-dev-server
jest
babel-core
babel-loader
babel-preset-env
css-loader
html-webpack-plugin
style-loader
These dependencies are included in the package.json file and can be installed by running npm install.