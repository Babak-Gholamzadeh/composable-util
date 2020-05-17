const Identity = x =>
({
  map: f => Identity(f(x)),
  fold: f => f(x),
  chain: f => f(x),
  ap: F => F.map(x),
  mjoin: () => x,
  inspect: () => `Identity(${x})`,
  toString: () => `Identity(${x})`,
});

module.exports = Identity;
