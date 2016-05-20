# es6-babel-startup

This repository contains a simple set of files for starting up with Babel.  
It can be used to check how Babel works and play with it.  
Have fun!

# Setup

Clone the repository using Git clone  
```
$ git clone https://github.com/jjherscheid/es6-babel-startup.git
```

Run Npm install, this will install babel-cli and babel-preset-es2015  
```
$ npm i
```

Run the babel build process using npm  
```
$ npm run build
```
The src/dog.js file will be converted to the lib/dog.js file.

# File structure

The project contains the following files:

```
|- src 
|   |- dog.js
|
|- package.json
|- jsconfig.json
|- index.html
```

*jsconfig.json* explanation
```js
{
    "compilerOptions": {
        // Compile to ES6
        "target": "es6",
        // Use ES6 modules
        "module": "es6"
    },
    "exclude": [
        "node_modules",
        "lib"
    ]
}
```

*package.json* explanation
```js
{
    "name": "es-babel-startup",
    "version": "0.0.1",
    "description": "ES6 Babel Startup project",
    "author": "Johan Herscheid",
    "dependencies": {},
    // Dependencies needed for babel to work.
    // babel-cli is the command line interface 
    // for babel.
    // babel-preset-es2015 is needed to be able to 
    // convert to ES2015 / ES6.
    "devDependencies": {
        "babel-cli": "^6.9.0",
        "babel-preset-es2015": "^6.9.0"
    },
    // Npm script for running babel using
    // $ npm run build.
    "scripts": {
        "build": "babel src -d lib --source-maps"
    },
    // Babel configuration to specify what
    // target type should be used by Babel.
    "babel": {
        "presets": [
            "es2015"
        ]
    },
    // ES Lint configuration for VSCode 
    // to support ES6.
    "eslintConfig": {
        "parserOptions": {
            "ecmaVersion": 6
        }
    },
    // JS Hint configuration for VSCode
    // to support ES6.
    "jshintConfig": {
        "esversion": 6
    }
}
```
