# Composable Utils

A bunch of handy utilities that might be needed in functional programming. They can facilate the implementations and logics that are require in this paradigm.

## Installation
```
$ npm install composable-utils
```
---
## Usage

For importing the package you have some different choices.

**1. Import all the utilities in a single object (e.g. named `fp`)**

```javascript
const FP = require('composable-utils');
```

**2. Destruct the object and use the only utils that you need**

```javascript
const {
  compose, curry, List, Either /* and so on */
} = require('composable-utils');
```

**3. Import the utils directly from its own module**

```javascript
const pipe = require('composable-utils/lib/pipe');
const Maybe = require('composable-utils/lib/maybe');
```

**4. Expose all of the utils globally under a namespace**

In the example below we pass the namespace as the argument of `exposeGlobally` function.

```javascript
// You can expose it in the entry point
require('composable-utils').exposeGlobally('_');

// Now you can access them from everywhere
// In another-file.js
const sum = _.curry((a, b) => a + b);
```

*Note: If you don't pass any argument to `exposeGlobally` function, the default value is `$` character.*

---

## license

[MIT](https://github.com/Babak-Gholamzadeh/composable-utils/blob/master/LICENSE)
















