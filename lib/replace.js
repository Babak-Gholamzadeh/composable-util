const curry = require('./curry');

const replace = curry((s, r, x) => x.replace(s, r));

module.exports = replace;