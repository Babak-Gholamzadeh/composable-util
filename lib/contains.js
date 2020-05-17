const curry = require('./curry');

const contains = curry((item, x) => x.includes(item));

module.exports = contains;
