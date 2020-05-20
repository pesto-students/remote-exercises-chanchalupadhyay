function cacheFunction(callback) {
  const cache = {};
  return function (...args) {
    console.log(args);
    if (callback in cache) {
      return cache[callback];
    }
    cache[callback] = callback(...args);
    return callback(...args);
  };
}

export { cacheFunction };
