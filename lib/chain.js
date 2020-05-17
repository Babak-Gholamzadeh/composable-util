const curry = require('./curry');

const chain = curry((f, F) => F.chain(f));

module.exports = chain;
