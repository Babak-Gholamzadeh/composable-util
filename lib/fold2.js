const curry = require('./curry');

const fold = curry((f, g, F) => F.fold(f, g));

module.exports = fold;