const curry = require('./curry');

const fold = curry((f, F) => F.fold(f));

module.exports = fold;