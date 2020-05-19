function sumFibs(inputSize) {
  let sum;
  let storeOddNumbers = [];
  let latestNumber = 1;
  let previousNumber = 0;
  if (inputSize === 1) return 1;
  if (inputSize === 0) return 0;
  storeOddNumbers.push(1);

  for (let i = 2; i <= inputSize && latestNumber <= inputSize; i++) {
    sum = previousNumber + latestNumber;
    previousNumber = latestNumber;
    latestNumber = sum;

    if (latestNumber % 2 !== 0 && latestNumber <= inputSize) {
      storeOddNumbers.push(latestNumber);
    }
  }
  const sumOfOddNumbers = storeOddNumbers.reduce((pre, acc) => pre + acc);

  return sumOfOddNumbers;
}

export { sumFibs };
