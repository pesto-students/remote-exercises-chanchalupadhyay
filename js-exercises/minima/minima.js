function minima(...args) {
  const [sizeOfResultantArray, array] = args;
  array.sort((pre, acc) => pre - acc);
  return array.slice(0, sizeOfResultantArray);
}

export { minima };
