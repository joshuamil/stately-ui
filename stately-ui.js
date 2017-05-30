module.exports = exports = statelyUI;

function statelyUI (state, conditions = {}) {

  let el, cn, cnk;
  let classes;
  let keys = Object.keys(conditions);

  for (let key in conditions) {

    el = '';
    classes = [];
    cn = '';

    if (conditions.hasOwnProperty(key)) {
      if (key === state) {
        cn = conditions[key];
        for (let k in cn) {
          if (cn.hasOwnProperty('k')) {

            cnk = cn[k];

            el = (typeof k === 'object')? k : document.querySelector(k);
            el = removeKeys(el, keys, state);

            // If the condition is an object and not a string value
            if (typeof cnk === 'object') {
              cnk = cn[k].class;

              // Populate text property if a condition is defined
              if (cn[k].hasOwnProperty('text')) {
                el.innerText = cn[k].text;
              }

            }

            // Process the class list
            classes = cnk.split(' ');
            classes.forEach( (c) => {
              if (c.substr(0,1) === '-') {
                el.classList.remove(c.substr(1,(c.length-1)));
              } else {
                el.classList.add(c);
              }
            });

          }
        }
      }
    }
  }

  return true;

}

function removeKeys (el, keys, exclude = '') {
  for (let key in keys) {
    if (keys.hasOwnProperty(key) && keys[key] !== exclude) {
      el.classList.remove(keys[key]);
    }
  }
  return el;
}
