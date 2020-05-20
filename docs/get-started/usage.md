---
id: usage
title: Usage
sidebar_label: Usage
---

For importing this package to your project after installation phase, you have several choices that you can pick up one of them based your need.

## Import all the utilities in a single object

*Here we just choose the name `FP` as a namespace, you are free to choose whatever you want.*

```javascript
const FP = require('composable-utils');

// Now you can access to the utilities via FP
const sum = FP.curry((a, b) => a + b);
```

## Destruct the object and use the only utils that you need

If you are fimiliar with [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) in javascript, you can simply use that to avoid defining any namespace and access the utils directly.

```javascript
const {
  compose, curry, List, Either /* and so on */
} = require('composable-utils');

// Now you can access to the utilities directly by their name
const sum = curry((a, b) => a + b);
```

## Import the utils directly from its own module

Sometimes if you might need to be more efficient and optimize, you can just import each util that you need directly from its own module.

By doing that you prevent any extra requirements that need more slow IO operations.

```javascript
const pipe = require('composable-utils/lib/pipe');
const Maybe = require('composable-utils/lib/maybe');
const take = require('composable-utils/lib/take');
const split = require('composable-utils/lib/split');
const chain = require('composable-utils/lib/chain');
const toUpperCase = require('composable-utils/lib/to-upper-case');

// Now you can access to the utilities directly by their name
const capitalizeLastName = pipe(
  split(' '),
  take(1),
  Maybe,
  chain(toUpperCase),
);

console.log(capitalizeLastName('babak gholamzadeh')); // output> GHOLAMZADEH
console.log(capitalizeLastName('babak')); // output> null
```

## Expose all of the utils globally under a namespace

And the last but not least, you migth want to require the utils once and access them from anywhere.

You can easily achive that by using `exposeGlobally` method after require the library.

By calling this method you should pass an argument to it that you want to be used as a namespace in global scope.

*Note: If you don't pass any argument to `exposeGlobally` method, the default value is $ character.*

```javascript
// You can expose it in the entry point
require('composable-utils').exposeGlobally('_');

// Now you can access them from everywhere
// E.g. in another-file.js
const sum = _.curry((a, b) => a + b);
```

