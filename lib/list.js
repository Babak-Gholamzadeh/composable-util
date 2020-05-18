const map = require('./map');
const head = require('./head');

const List = (...args) =>
({
  map: f => List(...map(f, args)),
  fold: f => map(f, args),
  chain: f => map(f, args),
  ap: F => map(head(args), F),
  mjoin: () => args,
  inspect: () => `List(${args})`,
  toString: () => `List(${args})`,
});

module.exports = List;
