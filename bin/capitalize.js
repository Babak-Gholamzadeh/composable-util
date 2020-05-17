const { compose, map, chain, Right, Left, toUpperCase, split, join } = require('../fp-util');

console.log('compose:', compose);

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

console.log('capitalize:', capitalize);

module.exports = capitalize;
