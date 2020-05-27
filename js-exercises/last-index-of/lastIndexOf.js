function lastIndexOf(...args) {
  const [Number, Array] = args;

  let lastIndexOfNumber = Array.lastIndexOf(Number);
  return lastIndexOfNumber;
}

export { lastIndexOf };
