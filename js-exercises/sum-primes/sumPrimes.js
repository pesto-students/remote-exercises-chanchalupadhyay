function isPrime(checkNumber) {
  for (let count = 2; count < checkNumber; count++) {
    if (checkNumber % count === 0) return false;
  }
  return true;
}

function sumPrimes(GivenNumber) {
  let i;
  let sum = 0;

  for (i = 2; i <= GivenNumber; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export { sumPrimes };
