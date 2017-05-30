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
