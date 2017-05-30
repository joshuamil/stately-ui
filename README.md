# stately-ui

`stately-ui` triggers UI / CSS state changes using configuration rather than complex code.


## Install

```
$ npm install stately-ui
```

## Building the Example
This will install `Webpack`, `eslint`, `babel`, `es2015` and the necessary loaders to transpile the example code to an `app.bundle.js` file. If you just want to run the example and not continue to modify the example code, then you do not need the `--watch` flag for the `webpack` command.

```
$ cd /directory/where/you/installed/stately-ui
$ npm install
$ webpack --watch
$ open http://localhost/stately-ui/example.html
```

## Usage

```js
const stately = require('./stately-ui');

let conditions = {
  on: {
    '#btnToggle': {
      class: 'off -on',
      text: 'Toggle: Off',
    },
    '.primary': 'on',
    '.secondary': 'on red',
    '.tertiary': 'on -hidden',
  },
  off: {
    '#btnToggle': {
      class: 'on -off',
      text: 'Toggle: On',
    },
    '.primary': 'off',
    '.secondary': 'off -red',
    '.tertiary': 'off hidden',
  },
};

let btn = document.querySelector('#btnToggle');
btn.addEventListener('click', (event) => {
  let b = event.currentTarget;
  let s = b.classList.value;
  let states = stately(s, conditions);
});
```

## Options

`stately-ui` accepts the following parameters:

### state (String = '')
The state (string) which you are activating.

### conditions (Object = {})
An object containing configurations for each state you wish to make available. Each `state` is represented as a top-level key inside the `conditions` object. State objects consist of one or more selectors with a collection of space-delimited css classes you wish to apply when the state is activated. You can remove classes by prefixing the class name with a dash (-) to signify its removal. Alternatively, a selector can have an object as its value with a class parameter and an optional text parameter which allows text nodes to be replaced.


## License

ISC
