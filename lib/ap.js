const curry = require('./curry');

const ap = curry((f, F) => F.ap(f));

module.exports = ap;
