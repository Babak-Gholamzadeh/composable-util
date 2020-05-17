const compose = require('./compose'),
      map = require('./map'),
      chain = require('./chain'),
      toUpperCase = require('./to-upper-case'),
      split = require('./split'),
      join = require('./join'),
      Right = require('./either/right'),
      Left = require('./either/left');

const firstLetter = (ch, i) =>
  !i ? Right(ch) : Left(ch);

const capitalize = compose(
  join(' '),
  map(
    compose(
      join(''),
      map(
        chain(toUpperCase)),
      map(firstLetter),
      split(''))),
  split(' '));

module.exports = capitalize;
