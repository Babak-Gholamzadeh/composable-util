const curry = require('./curry');

const pass = curry((F, f) => f.pass(F));

module.exports = pass;
