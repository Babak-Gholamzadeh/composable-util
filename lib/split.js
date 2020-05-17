const curry = require('./curry');

const split = curry((separator, str) => str.split(separator));

module.exports = split;
