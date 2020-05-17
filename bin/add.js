const curry = require('./curry');

const add = curry((a, b) => a + b);

module.exports = add;