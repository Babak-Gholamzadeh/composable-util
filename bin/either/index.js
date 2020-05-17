const Right = require('./right');
const Left = require('./left');

const Either = Right;

Object.assign = (Either, {
  Right,
  Left,
  of: Right
});

module.exports = Either;