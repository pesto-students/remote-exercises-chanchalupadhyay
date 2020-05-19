function sumAll([...array]) {
  const smallestNum = Math.min(...array);
  const largestNum = Math.max(...array);
  let sum = 0;
  for (let i = smallestNum; i <= largestNum; i++) {
    sum += i;
  }
  return sum;
}

export { sumAll };
