const curry = require('./curry');

const multiply = curry((a, b) => a * b);

module.exports = multiply;