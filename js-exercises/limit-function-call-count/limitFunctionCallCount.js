const limitFunctionCallCount = (callback, callLimit) => {
  let count = 0;
  return (...args) => {
    while (count < callLimit) {
      count++;
      return callback(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };
