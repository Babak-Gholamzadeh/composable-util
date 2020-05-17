const curry = require('./curry');

const take = curry((i, x) => x[i]);

module.exports = take;