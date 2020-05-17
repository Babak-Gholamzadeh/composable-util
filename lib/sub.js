const curry = require('./curry');

const sub = curry((a, b) => a - b);

module.exports = sub;