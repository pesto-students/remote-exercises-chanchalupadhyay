function diffArray(inputArray1, inputArray2) {
  let symmetricDifference = [];
  for (let i in inputArray1) {
    if (inputArray2.indexOf(inputArray1[i]) == -1) {
      symmetricDifference.push(inputArray1[i]);
    }
  }
  for (let i in inputArray2) {
    if (inputArray1.indexOf(inputArray2[i]) == -1) {
      symmetricDifference.push(inputArray2[i]);
    }
  }

  return symmetricDifference;
}

export { diffArray };
