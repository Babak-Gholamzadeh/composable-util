const Right = require('./right');

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  chain: f => x,
  ap: F => F.map(x),
  mjoin: () => x,
	concat: either => Left(x),
  inspect: () => `Left(${x})`,
  toString: () => `Left(${x})`,
});

module.exports = Left;
