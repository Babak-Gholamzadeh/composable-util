const Right = require('./right');
const Left = require('./left');
const fromNullable = require('./from-nullable.js');
const tryCatch = require('./try-catch');

const Either = Right;

Object.assign(Either, {
  Right,
  Left,
  fromNullable,
  tryCatch,
  of: Right
});

module.exports = Either;