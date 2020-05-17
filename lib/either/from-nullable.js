const Right = require('./right');
const Left = require('./left');

const fromNullable = x =>
  x != null ? Right(x) : Left(null);

module.exports = fromNullable;
