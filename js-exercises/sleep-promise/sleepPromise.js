function sleep(ms) {
  const promise = new Promise((resolve) => setTimeout(() => resolve(), ms));
  function inner(args) {
    return promise.then(() => args);
  }

  inner.then = function (onResolved) {
    return promise.then(onResolved);
  };
  inner.catch = function (onRejected) {
    return promise.catch(onRejected);
  };
  return inner;
}

export { sleep };
