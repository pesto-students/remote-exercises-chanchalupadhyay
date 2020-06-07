function storeFrequencyOfAnagrams(string) {
  let splitedString = string.split(" ");
  let anagrams = {};

  for (let i = 0; i < splitedString.length; i++) {
    if (splitedString[i].length > 1) {
      let sortedWords = splitedString[i].split("").sort().join("");
      if (anagrams[sortedWords]) anagrams[sortedWords] += 1;
      else anagrams[sortedWords] = 1;
    }
  }
  return anagrams;
}

const countingAnagrams = (str) => {
  if (typeof str !== "string") throw new TypError("input must be string");

  let anagrams = storeFrequencyOfAnagrams(str);
  let totalNumberOfAnagrams = 0;

  let result = Object.entries(anagrams).map((element) => {
    let word = element[0];
    let frequencyOfwords = element[1];
    if (word.length == frequencyOfwords) return (totalNumberOfAnagrams += 1);
    return totalNumberOfAnagrams;
  });
  return Math.max(...result);
};

export { countingAnagrams };
