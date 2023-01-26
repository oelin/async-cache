# Async Cache 🏃‍♀️

Cache return values of asynchronous JavaScript functions.


## Installation

```sh
npm i async-cache
```


## Usage

Async cache allows you to store the results of time-consuming asynchronous operations so they take virtually no time in future! For instance, consider the following `sleep` function which simply stalls for some number of seconds and then returns.

```js
function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}
```

We can decorate this function using `async-cache` in order to speed up future executions.

```js
const ac = require('async-cache')

const sleepCached = ac(sleep)
```

On the first call, with the argument `1`, we see that `sleepCached` resolves after one second. 

```js
await sleepCached(1) // Resolves for 1 second.
```

However, all subsequent calls with the same argument will resolve immediately.

```js
await sleepCached(1) // Resolves immediately.
```

## API

### `cache(function: Function) -> AsyncFunction`

Decorates a given function to provide caching functionality. All calls to the decorated function will resolve immediately if the arguments have been seed before. Note that `function` is assumed to be deterministic. If this is not the case, then caching must be handled in a more nuanced way where there is some indication as to whether the return value has changed.


## Future

* Cache invalidation to help simplify usage with non-deterministic functions.
