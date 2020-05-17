const Right = require('./right');
const Left = require('./left');
const fromNullable = require('./from-nullable.js');

const Either = Right;

Object.assign = (Either, {
  Right,
  Left,
  fromNullable,
  of: Right
});

module.exports = Either;