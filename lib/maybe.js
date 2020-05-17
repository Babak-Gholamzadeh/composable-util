const Maybe = x =>
({
  map: f => x ? Maybe(f(x)) : Maybe(null),
  fold: f => x ? f(x) : null,
  chain: f => x ? f(x) : null,
  ap: F => F.map(x),
  mjoin: () => x,
  inspect: () => `Maybe(${x})`,
  toString: () => `Maybe(${x})`,
});

module.exports = Maybe;
