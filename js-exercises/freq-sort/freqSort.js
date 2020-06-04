function freqSort(arrayOfCharacters) {
  if (!Array.isArray(arrayOfCharacters)) {
    throw new Error("argument should be array");
  } else {
    let frequencyMap = {};

    arrayOfCharacters.map(checkFreqElement);

    function checkFreqElement(element) {
      element = element.normalize("NFC");
      if (frequencyMap.hasOwnProperty(element))
        return (frequencyMap[element] += 1);
      else return (frequencyMap[element] = 1);
    }

    let sortedArray = Object.entries(frequencyMap).sort(
      (firstElement, secondElement) => secondElement[1] - firstElement[1]
    );

    let arrayOfSortedCharacters = sortedArray.map((el) => el[0]);
    console.log(arrayOfSortedCharacters);
    return arrayOfSortedCharacters;
  }
}
export { freqSort };
