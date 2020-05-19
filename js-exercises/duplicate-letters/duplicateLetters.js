function duplicateLetters(...args) {
  const string = args[0];
  const lettersCount = {};
  for (let i = 0; i < string.length; i++) {
    if (lettersCount[string[i]]) {
      lettersCount[string[i]] += 1;
    } else {
      lettersCount[string[i]] = 1;
    }
  }
  const maxChar = Object.keys(lettersCount).reduce((a, b) =>
    lettersCount[a] > lettersCount[b] ? a : b
  );
  return lettersCount[maxChar] > 1 ? lettersCount[maxChar] : false;
}

export { duplicateLetters };
