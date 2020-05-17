const curry = require('./curry');

const join = curry((separator, x) => x.join(separator));

module.exports = join;
