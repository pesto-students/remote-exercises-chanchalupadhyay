function curry(callback) {
  return function curried(...args1) {
    if (args1.length >= callback.length) {
      return callback.apply(this, args1);
    } else {
      return function (...args) {
        return curried.apply(this, args1.concat(args));
      };
    }
  };
}
export { curry };
