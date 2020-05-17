const curry = require('./curry');

const divide = curry((a, b) => a / b);

module.exports = divide;