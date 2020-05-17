const curry = f => {
  const takeArgs = (...args) =>
    args.length < f.length ?
      takeArgs.bind(null, ...args) :
      f(...args);
  return takeArgs;
}

module.exports = curry
