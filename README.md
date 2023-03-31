<h1>Innowise Internship Task #5 - Front-end JS Developer</h1>
 
This is the repository for task #5 of the Innowise Internship for front-end JS developer. The task involved building a calculator application using JavaScript and implementing the Command pattern. The full task details can be found in the <a href="https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view"> task description file.
</a>
How to run the app
<h2>Open dist directory</h2><br>
Open the dist directоry.<br>
Launch index.html.<br>
<h2>Directory structure</h2>
├── dist/<br>
│   ├── bundle.js<br>
│   ├── index.html<br>
│   └── styles.css<br>
├── src/<br>
│   ├── calculator.js<br>
│   ├── commands.js<br>
│   ├─- const.js<br>
│   ├── handler.js<br>
│   └── index.js<br>
├── __test__/<br>
├── .gitignore<br>
├── package.json<br>
├── package-lock.json<br>
└── webpack.config.js<br>

<h3>The dist directory contains the compiled files for deployment:</h3><br>
bundle.js: The minified and optimized JavaScript file.<br>
index.html: The minified HTML file.<br>
styles.css: The CSS styles for the application.<br>
</h3>The src directory contains the JavaScript files with the logic of the application:</h3><br>
calculator.js: The main calculator class.<br>
const.js: Contains constants and methods used by the calculator.<br>
commands.js: Contains the command classes for implementing the Command pattern.<br>
handler.js: Contains the handler for buttons.<br>
index.js: The rendering and importing of other files. The entry point for Webpack.<br>
<h3>Other root files:</h3><br>
.gitignore: Specifies files and directories that should not be tracked by git.<br>
package.json: Contains metadata about the project, including dependencies and scripts.<br>
package-lock.json: A file that locks the versions of the project's dependencies.<br>
webpack.config.js: The configuration file for Webpack.<br>
<h3>The __test__ directory contains Jest tests for the application.</h3><br>

<h2>Dependencies<h2><br>
webpack<br>
webpack-cli<br>
webpack-dev-server<br>
jest<br>
babel-core<br>
babel-loader<br>
babel-preset-env<br>
css-loader<br>
html-webpack-plugin<br>
style-loader<br>
These dependencies are included in the package.json file and can be installed by running npm install.
