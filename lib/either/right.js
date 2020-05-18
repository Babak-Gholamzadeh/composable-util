const Left = require('./left');

const Right = x =>
({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  chain: f => f(x),
  ap: F => F.map(x),
  pass: F => F.map(f => f(x)),
  mjoin: () => x,
	concat: either =>
		either.fold(
			e => Left(e),
			r => Right(value.concat(r))
		),
  inspect: () => `Right(${x})`,
  toString: () => `Right(${x})`,
});

module.exports = Right;
