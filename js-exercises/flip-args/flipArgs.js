function flipArgs() {
  return function (...args) {
    let res = Array.from(args).reverse();
    return res;
  };
}
