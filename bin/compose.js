const compose = (...args) =>
  x =>
    args.reduceRight((v, f) => f(v), x);

module.exports = compose;
