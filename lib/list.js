const List = (...args) =>
({
  map: f => List(args.map(f)),
  fold: f => args.map(f),
  chain: f => args.map(f),
  ap: F => List(...args.map(f => F.chain(f)).flat()),
  pass: F => List(...F.chain(f => args.map(f)).flat()),
  mjoin: () => args,
  inspect: () => `List(${args})`,
  toString: () => `List(${args})`,
});

module.exports = List;
