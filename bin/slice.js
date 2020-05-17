const curry = require('./curry');

const slice = curry((i, x) => x.slice(i));

module.exports = slice;
